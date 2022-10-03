const express=require('express')
const app=express()
const connectDB=require('./config/db')
const router = express.Router();

// connect with database
connectDB()



// middleware
app.use(express.json())
app.use('/api/contacts',require('./routes/contact'))
router.get('/',function(req,res){
    res.send('hello')
  })
  app.use('/', router);
  app.listen(process.env.port || 5000);