/**reviews model */

const connection=require("./mysql_conn");
module.exports=class Reviews{
    get_reviews(id){
        return new Promise(function (resolve, reject) {
            connection.con.query("SELECT * FROM Reviews where hotelID='"+id+"';", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                connection.con.end;
            })
        })
    }
    get_filter_reviews(filter){
        return new Promise(function (resolve, reject) {
            connection.con.query("SELECT * FROM Reviews where "+filter+";", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                connection.con.end;
            })
        })
    }
}