const mysql2 = require("mysql2");
require('dotenv').config(); // Load environment variables from .env file
const dbConnection = mysql2.createPool({
 
  //  user:"final_admin", 
  //   database:"final_db",
  //   host:"localhost",
  //   password:"A123456789a", 
  //   connectionLimit: "10"

  // user:process.env.USER, 
  //   database:process.env.DATABASE,
  //   host:"localhost",
  //   password:process.env.PASSWORD, 
  //   connectionLimit: "10"
    host: "sql5.freesqldatabase.com",
    database: "sql5695555",
     user: "sql5695555",
     password: "WgEuZjGKny",
    port: "3306"
  
});
  // console.log(process.env.USER)
  // console.log(process.env.PASSWORD)
  // console.log(process.env.DATABASE)
module.exports = dbConnection.promise();