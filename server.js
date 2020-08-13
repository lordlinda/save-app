//Import modules
const express=require('express')
const morgan=require('morgan')
const dotenv=require('dotenv')
const cors=require('cors')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const path=require('path')


//we have certain variables  that we need to use however we need to protect them
//from  other users that are not admin,and they can steal our data
//which is not what we want ,therefore we store them in a .env file
//during local development
//but when we deploy our app  we wont be serving them from our app
//but we will put them in the software we gonna deploy to
//to be able to access them we need the dotenv middleware from .env file
dotenv.config()
//we start these .env variables using process.env.VALUE

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/saveApp',{
	useUnifiedTopology: true ,
	useNewUrlParser: true
}).then(()=>console.log('connected to mongodb'))
  .catch(err=>console.log('just a little issue with mongo'))
//Init app
const app=express()
//there is some middleware that needs to run before the routes
//first is cors since our front and backend runs on different ports
app.use(cors())
//the next middleware is bodyparser to get data from the front using req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//so there are some middlewares  that we want only to run during development
//that when we deploy we no longer want them to run
if(process.env.NODE_ENV==='development'){
	app.use(morgan('dev'))
}


//we use our routes
app.use('/users',require('./routes/auth.js'))

//this is error middleware handler for a route which doesnt exist
app.use((req,res,next)=>{
	res.status(404).json({
		message:'Page not found'
	})
})

if(process.env.NODE_ENV === 'production'){
	  app.use(express.static(path.join(__dirname, "client", "build")))

	  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });

}
//in development,we can use our hardcoded port however in deployment we process.env.PORT
//so that we can be assigned to an available port
const PORT = process.env.PORT || 5000
//listening for server,the first parameter is the port and then a callback function
app.listen(PORT,()=>console.log(`Server is listening on ${PORT}`))