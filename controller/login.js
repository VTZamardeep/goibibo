/**login controller */
const m_login=require("../models/login");


function post_user(req,res){
    const info=new m_login;
    const data=info.post_login(req.body);
    data.then(function(result) {
        res.json(result);
     }, function(err) {
         res.json(err);
     })
}

module.exports={
    post_user,
}