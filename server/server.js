const express = require('express');
const App = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDatabase = require('./src/database/connection');

connectToDatabase();

App.use(express.json())
App.use(cookieParser())
App.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));

App.listen(5000,()=>{
    console.log('App listening at http://localhost:5000')
})
