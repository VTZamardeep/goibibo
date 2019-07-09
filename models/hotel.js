/**
 * hotel model
 */

const mysql=require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"goibibo",
    password: "netzwelt"
});

module.exports=class Hotels{
    get_hotels(place){
         
          return new Promise(function(resolve, reject) {
            con.query("SELECT * FROM hotels where place='"+place+"';", function(err, result) {
                   if (err) {
                       reject(err);
                   } else {
                       resolve(result);
                   }
                con.end;   
               })  
    })
}
}