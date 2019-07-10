const c_filter=require("../controller/filter");
const express=require("express");
const router=express.Router();

router.get("",c_filter.get_filter_reviews);

module.exports=router;