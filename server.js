const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8080;

// allow handling of json files
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// access files in public folder
app.use(express.static('public'));


// add new note to DB
app.post('/api/notes', (req,res) => {
  console.log('API REQUEST: save a new note', req.body);
  let dbData = JSON.parse(fs.readFileSync('./db/db.json'));
  dbData.push( {id:dbData.length, title:req.body.title, text:req.body.text} );
  fs.writeFileSync('./db/db.json', JSON.stringify(dbData));
  res.end();
});
