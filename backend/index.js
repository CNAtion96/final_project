const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

mongoose.connect('mongodb://CNAtion96:Cwim19967@ds013941.mlab.com:13941/user_list');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 



app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});