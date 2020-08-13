//here is where we store action creators
//action creators dispatch  actions to reducers
import axios from 'axios'
//these pick the value from the form for each step
export const stepone=(goal)=>{
   return dispatch=>{
   	  dispatch({
   	  	type:'stepone',
   	  	payload:goal
   	  })
   }
}
export const steptwo=(frequency)=>{
   return dispatch=>{
   	  dispatch({
   	  	type:'steptwo',
   	  	payload:frequency
   	  })
   }
}
export const stepthree=(amount)=>{
   return dispatch=>{
   	  dispatch({
   	  	type:'stepthree',
   	  	payload:amount
   	  })
   }
}
export const stepfour=(duration)=>{
   return dispatch=>{
   	  dispatch({
   	  	type:'stepfour',
   	  	payload:duration
   	  })
   }
}

export const makePayment=(token,details)=>{
//console.log(token,details)
return async dispatch=>{
    await axios
              .post('/users/payments',{token,details})
              .then(res=>{
               //console.log(res)
               dispatch({
                type:'plan',
                payload:res.data.plan
               })
               localStorage.setItem('email',token.email)
              }).catch(err=>{
               console.log(err)
              })
}
}

const email =localStorage.getItem('email')
export const getPlans=()=>{
  return async dispatch=>{
        await  axios
                    .get(`/users/plans/${email}`)
                    .then(plans=>{
                      //console.log(plans.data.plans[0].charges)
                      dispatch({
                        type:'plans',
                        payload:plans.data.plans
                      })
                    }).catch(err=>{
                      console.log(err)
                    })
  }
}

