/**
 * hotel controller
 */
const Hotels=require("../models/hotel");

exports.get=function(req,res){
    console.log(req.params);
    const hotel=new Hotels;
    var place=req.params.place;
    const data=hotel.get_hotels(place);
    data.then(function(result) {
        userDetails = result;
        res.json(userDetails);
    }, function(err) {
        res.json({msg:"NO SUCH PLACE"});
    })
}