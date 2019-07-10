const connection=require("./mysql_conn");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

module.exports=class login{
    post_login(request){
        

        const promise_post= new Promise(hash,function (resolve, reject) {
            console.log(hash);
            connection.con.query("insert into users (phn,name,mail,password) values("+request.phn+",'"+request.name+"','"+request.mail+"','"+request.password+"');", function (err, result) {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
                connection.con.end;
            })
        })
        crypt.hash(myPlaintextPassword, saltRounds).then(promise_post(hash));
     return promise_post;   
    }
}