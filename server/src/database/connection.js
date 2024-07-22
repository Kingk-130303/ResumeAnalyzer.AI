const mysql = require('mysql');
require('dotenv').config({path: __dirname + '/../../../.env'});
// console.log(process.env.db_password);
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.db_password,
    database: 'resumeanalyzer_ai',
    port: 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
  
    console.log('Connected to MySQL as ID ' + connection.threadId);
  });