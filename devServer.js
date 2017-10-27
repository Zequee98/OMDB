const path = require('path');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, function(err){
  if(err) return console.log(err);
  console.log('Escuchando en puerto 3000')
})
