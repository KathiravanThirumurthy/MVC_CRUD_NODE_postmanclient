const users=require('../data/users')
const createUser=(req,res)=>{
    const user=users.some(user=>{
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
    res.status(200).send({"message":"Registered successfully"})
}
const getAllUsers=(req,res)=>{
    res.status(200).send(users);
}
const getUserById=(req,res)=>{
    const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    res.status(200).send(users[findIndex]);
      
}
const updateUser=(req,res)=>{
    const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    req.body.name ? (users[findIndex].name=req.body.name):'';
    req.body.email ? (users[findIndex].email=req.body.email):'';
    res.status(200).send({"message":"User Updated"});

}
const deleteUser=(req,res)=>{
    const findIndex=users.findIndex(user=>user.email === req.params.userId);
    if(findIndex === -1)
    {
        res.status(200).send({"message":"User not found"})
        return;
    }
    users.splice(findIndex,1);
    res.status(200).send({"message":"User deleted"});
}
module.exports={createUser,getAllUsers,getUserById,updateUser,deleteUser}