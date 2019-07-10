const c_review=require("../controller/reviews");
const express=require("express");
const router=express.Router();
router.get('/:id',c_review.get_reviews);
module.exports=router;