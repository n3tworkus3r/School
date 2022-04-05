var mssql = require('mssql');
    // MSSQL connect
    var db_config = {
    server:'BELYAEV-PC\SQLEXPRESS',
    database:'School',
    user:'AD\belyaevms',
    password:'B3L7A3VM',
    port:1433
}



async () => {
    try {
     await sql.connect(sqlConfig)
     const result = await sql.query`select * from mytable where id = ${value}`
     console.dir(result)
    } catch (err) {
     // ... error checks
    }
   }



module.exports = mssql











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