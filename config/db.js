const mongoose = require('mongoose');
const config = require('./config');
const dbUrl = config.db.url;

mongoose.connect(dbUrl)
  .then(() => {
    console.log('DataBase is Connected');
  })
  .catch(error => {
    console.error('Database is not Connected');
    console.error(error);
    process.exit(1); 
  });
