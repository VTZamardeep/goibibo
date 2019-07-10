/**
 * hotel controller
 */
const Hotels=require("../models/hotel");

exports.get=function(req,res){
    const hotel=new Hotels;
    var place=req.params.place;
    const data=hotel.get_hotels(place);
    data.then(function(result) {
        res.json(result);
    }, function(err) {
        res.json(err);
    })
}