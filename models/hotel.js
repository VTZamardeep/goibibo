/**
 * hotel model
 */


const connection=require("./mysql_conn");
module.exports = class Hotels {
    get_hotels(place) {

        return new Promise(function (resolve, reject) {
            connection.con.query("SELECT * FROM Hotels where place='" + place + "';", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            
            })
        })
    }
}