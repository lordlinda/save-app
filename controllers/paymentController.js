const Plan =require('../models/Plan.js')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports ={
  payment:(req,res)=>{
    const {token,details} =req.body
    //console.log(details.amount)
    //in our case of payment we are going to be creating a saving plan as well
    //this plan is accompanied with payment of the money to start the plan
    //that is why the user enters in their credit card information
    //when  they have entered their credit card info,
    //we get a token back from the client
    //first we create a customer using the id and the token from the client
    //this is essential for creating a source such that everytime they pay they
    //dont have to give us their credit card info
    //after creating the customer,then we charge them but we are going to be using just the customer id
    //
    //we receive back a charge from stripe which we will store in our database
    //we store the info about the plan details and the necessary charges 
    //in our backend as part of the plan
    stripe.customers.create({
     source:token.id,
      email:token.email,
   }).then(customer=>{
    //console.log(customer)
       stripe.charges.create({
      amount:details.amount,
      currency: 'usd',
      customer: customer.id,
    }).then(charge=>{
     // console.log(charge)

     const newPlan= new Plan({
      customer_id:customer.id,
      details:details,
      charges:[{charge}],
      email:token.email
     })
     //console.log('hello')
     //after creating the plan then w ecan push it in the plans array of the user
     //such that we can know that it belongs to that user
     newPlan.save()
     .then(plan=>{
      res.status(200).json({
        message:'plan created',
        plan
      })

     }).catch(err=>{
     	res.status(400).json({
      error:err
    })
     })

    }).catch(err=>{
    res.status(400).json({
      error:err
    })
   })
   }).catch(err=>{
    res.status(400).json({
      error:err
    })
   })

  },
  plans:(req,res)=>{
    Plan.find({email:req.params.email})
    .then(plans=>{
      res.status(200).json({
        plans
      })

    }).catch(err=>{
      res.status(400).json({
        error:err
      })
    })
  }
}