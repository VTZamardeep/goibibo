const hotel=require("../controller/hotels");
const express=require("express");
const router=express.Router();
router.get("/:place",hotel.get);
module.exports=router;