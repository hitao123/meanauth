const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose'); // mongo
const passport = require('passport'); // authenticate requests
const path = require('path');

const config = require('./config/databases');
const users = require('./routes/users');

const app = express();
const port = process.env.PORT || 8080;


// connect to mongodb
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('connect to ' + config.database);
})

mongoose.connection.on('error', (err) => {
  console.log('database err' + err);
})


// cors middleware
app.use(cors());
// bodyparser middlerware
app.use(bodyParser.json());
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


console.log('==888==>')
require('./config/passport')(passport);

// router
app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});



app.listen(port, () => {
  console.log('Server start at ' + 'http://localhost:' + port);
})
