const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb'); // const MongoClient = require('mongodb').MongoClient;

// create application 'Game'
const appGame = express();
// get path to main page
const indexPath = path.join(__dirname, 'public', 'index.html');
// getting main page
appGame.get('/', (req, res) => {
  res.sendFile(indexPath);
});
// set port by default or 5000
const port = process.env.PORT || 5000;
// start server and listen port from variable 'port'
appGame.listen(port, () => console.log(`listen port ${port}`));
