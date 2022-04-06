/*
var mssql = require('mssql');
    // MSSQL connect
    var db_config = {
    server:'BELYAEV-PC\SQLEXPRESS',
    database:'School',
    user:'AD\belyaevms',
    password:'B3L7A3VM',
    port:1433
}



module.exports = mssql
*/


const config = {

    user:'AD\belyaevms',
    password:'B3L7A3VM',
    server:'BELYAEV-PC',
    database:'School',
    options: {
        trustedconnection: true,
        andbleArithAbort: true,
        instancename: ''

    },
    port:1433
}
module.exports = config

/*
async () => {
    try {
     await sql.connect(sqlConfig)
     const result = await sql.query`select * from mytable where id = ${value}`
     console.dir(result)
    } catch (err) {
     // ... error checks
    }
   }
*/













/*



const sequelize = new Sequelize('DB Name', 'Username', 'Password', {
    host: 'Host',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true,
        }
    }
  });



  */