const express=require('express');
const router=express.Router();
const userCtrl=require('../controller/user.controller');
router.route('/api/users/register').post(userCtrl.createUser);
router.route('/api/users').get(userCtrl.getAllUsers);
router.route('/api/users/:userId').get(userCtrl.getUserById);
router.route('/api/users/:userId').put(userCtrl.updateUser);
router.route('/api/users/:userId').delete(userCtrl.deleteUser);
module.exports=router;