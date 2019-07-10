/**filter */

const m_reviews=require("../models/reviews");
const url = require('url');

module.exports.get_filter_reviews=(req,res)=>{
    var filters=req.query;
    var str=new String;
    for (const [keys, values] of Object.entries(filters)) {
        str=str.concat(' '+keys+"='"+values+"'and");
      }
    var filter=str.substr(0,str.length-3); 
    
    const review=new m_reviews;
    const data=review.get_filter_reviews(filter);
    data.then(function(result) {
        res.json(result);
    }, function(err) {
        res.json(err);
    })
    
}