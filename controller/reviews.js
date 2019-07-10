/**reviews controller */

const m_reviews=require("../models/reviews");

module.exports.get_reviews=(req,res)=>{
    const reviews=new m_reviews;
    const id=req.params.id;
    const data=reviews.get_reviews(id);
    data.then(function(result) {
       res.json(result);
    }, function(err) {
        res.json(err);
    })
}