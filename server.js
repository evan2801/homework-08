const express = require('express');
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();
//all routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");


//middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});