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

mydatabase.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE id=?`, [id], (err,results) =>{
            if(err){
                return reject(err)
            }
            return resolve(results[0])
        })
    })
}

module.exports = mydatabase