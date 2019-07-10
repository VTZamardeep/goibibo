const c_login=require("../controller/login");
const express=require("express");

const router=express.Router();


router.post("",c_login.post_user);

module.exports=router;