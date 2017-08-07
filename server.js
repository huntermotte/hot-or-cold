const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/guesses-app')
const {Guesses} = require('./models');

app.use(morgan('common'));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/fewest-guesses', (req, res) => {
  return Guesses.find({}, (err, data) => {
    if(err) {
      res.send(err)
    }
    res.json(data)
  })
})

app.post('/fewest-guesses', bodyParser, (req, res) => {
  console.log(req.body)
  return Guesses.insert({}, (err, data) => {
    if(err) {
      res.send(err)
    }
    res.json(data)
  })
})

app.listen(process.env.PORT || 8081, () => console.log('Listening on Port 8081'));
