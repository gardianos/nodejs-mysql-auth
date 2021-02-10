const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit:10,
    password:'',
    user:'root',
    database:'mydatabase',
    host:'localhost',
    port:'3306'
})

let mydatabase = {}

mydatabase.all = () =>{

    return new Promise((resolve, reject) =>{

        pool.query(`SELECT * from users`, (err,results) => {
            if(err){
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = mydatabase