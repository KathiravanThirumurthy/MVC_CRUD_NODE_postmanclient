const express=require('express');
const mongoose=require('mongoose');
const config=require('./config/config')
const app=express();
const userRoutes=require('./routes/user.routes');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',userRoutes);
mongoose.set('strictQuery', false);
mongoose.connect(config.mongouri)
.then(()=>console.log('Connected to database '))
.catch((err)=>console.log('couldnt connect to db.....',err));

app.listen(config.PORT,()=>{
    console.log(`server started ......${config.PORT}`)
})