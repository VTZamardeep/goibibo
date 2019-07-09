const express=require('express');
const app=express();
const bodyparser=require("body-parser");
const hotel=require("./routes/hotels");



app.use(bodyparser.urlencoded({ extended: false }));
app.use("/hotels",hotel);
app.use("/",function(req,res,next){    
})
app.listen(3000);