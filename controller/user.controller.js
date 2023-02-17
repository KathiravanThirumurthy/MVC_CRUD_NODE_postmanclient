const users=require('../data/users')
const userModel=require('../models/user.model')
const createUser=(req,res)=>{
    /*const user=users.some(user=>{

        if(user.email === req.body.email)
        {
            return user;
        }
    })
    if(user)
    {
        res.status(200).send({"message":"not a valid user"})
        return;
    }
    users.push(req.body);
    res.status(200).send({"message":"Registered successfully"})*/

    /* persistent data */
    const user=new userModel(req.body)
    user.save()
    .then((data)=>{
        if(!data)
        {
            res.status(400).send({message:"Users not registered successfully"})
        }
        res.status(200).send(data)
    })
}
const getAllUsers=(req,res)=>{
   // res.status(200).send(users);
   
   userModel.find()
    .then((data)=>{
        if(!data)
        {
            res.status(400).send({message:"Users not found"})
        }
        res.status(200).send(data)
    })
}
const getUserById=(req,res)=>{
    /*const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    res.status(200).send(users[findIndex]);*/

    userModel.findById(req.params.userId)
    .then((data)=>{
        if(!data)
        {
            res.status(400).send({message:"Users not found"})
        }
        res.status(200).send(data)
    })
      
}
const updateUser=(req,res)=>{
   /* const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    req.body.name ? (users[findIndex].name=req.body.name):'';
    req.body.email ? (users[findIndex].email=req.body.email):'';
    res.status(200).send({"message":"User Updated"});*/
    userModel.findByIdAndUpdate(req.params.userId,req.body)
    .then((data)=>{
        if(!data)
        {
            res.status(400).send({message:"Users not found"})
        }
        res.status(200).send({message:"Users updated"})
    })


}
const deleteUser=(req,res)=>{
   /* const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    users.splice(findIndex,1);
    res.status(200).send({"message":"User deleted"});*/
    userModel.findByIdAndRemove(req.params.userId)
    .then((data)=>{
        if(!data)
        {
            res.status(400).send({message:"Users not found"})
        }
        res.status(200).send({message:"Users deleted"})
    })
    .catch(e=>{
        res.send({message:e.message})
    })

}
const deleteAllUser=(req,res)=>{
    userModel.deleteMany()
    .then((data)=>{
           res.status(200).send({message:"All the Users deleted"})
    })
    .catch(e=>{
        res.send({message:e.message})
    })
}
module.exports={createUser,getAllUsers,getUserById,updateUser,deleteUser,deleteAllUser}