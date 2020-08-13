//this is the routes page
const express=require('express')
const router =express.Router()


//Controllers
const {payment,plans}=require('../controllers/paymentController.js')

//@route              /users/payment
//@description        make a payment
//@access                public
router.post('/payments',payment)


router.get('/plans/:email',plans)
module.exports=router