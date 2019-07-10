const express=require('express');
const app=express();
const bodyparser=require("body-parser");
const hotel=require("./routes/hotels");
const review=require("./routes/reviews")
const filter=require("./routes/filter");
const login=require("./routes/login");

app.use(bodyparser.urlencoded({ extended: true  }));
app.use(bodyparser.json());
app.use("/login",login);
app.use("/hotels",hotel);
app.use("/filters?:id",filter)  
app.use("/reviews",review)      
app.use("/",function(req,res,next){    
})
app.listen(3000);