const mysql = require('mysql');
require('dotenv').config({path: __dirname + '/../../../.env'});

const connectToDatabase = () => {
  const connection = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,
    port: 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }

    console.log('Connected to MySQL as ID ' + connection.threadId);
  });

  return connection;
};

module.exports = connectToDatabase;