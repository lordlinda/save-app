//for mongoose we create the user schema,
//we have different types in the userSchema
const mongoose=require('mongoose')
var bcrypt = require('bcryptjs');

const planSchema=new mongoose.Schema({
	customer_id:{
		type:String,
	},
	details:{},
	charges:[],
	email:String
})

module.exports = mongoose.model('Plan',planSchema)