const express=require('express');
const config=require('./config/config')
const app=express();
const userRoutes=require('./routes/user.routes');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',userRoutes);
app.listen(config.PORT,()=>{
    console.log(`server started ......${config.PORT}`)
})