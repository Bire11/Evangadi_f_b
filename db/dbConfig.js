const mysql2 = require("mysql2");
require('dotenv').config(); // Load environment variables from .env file
const dbConnection = mysql2.createPool({
 
   user:"final_admin", 
    database:"final_db",
    host:"localhost",
    password:"A123456789a", 
    connectionLimit: "10"

  //  user:process.env.USER, 
  //   database:process.env.DATABASE,
  //   host:"localhost",
  //   password:process.env.PASSWORD, 
  //   connectionLimit: "10"
});
  console.log(process.env.USER)
  // console.log(process.env.PASSWORD)
  // console.log(process.env.DATABASE)
module.exports = dbConnection.promise();