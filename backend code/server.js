const express = require('express');
const path = require('path');
const fs = require('fs');
//port
const app = express();
const PORT = 3308;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('../public'));
//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/html/noted.html'));
  });

  //json to retreave notes
app.get(`/api/notes`, (req, res) => {
  fs.readFile("./data/data.json", "utf8", function(error, data) {
    console.log(data)
    var newData = JSON.parse(data);
    return res.json(newData);
  });
});

app.put(`/api/notes`, (req, res) => {
  
})




  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });