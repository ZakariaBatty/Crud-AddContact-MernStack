// config dotenv
require('dotenv').config();

// varaible for recover
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { noteRoutes } = require('./routes/note.routes');

// for remove the errors
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// uri connection with
const uri = process.env.ATLAS_URI;

// create object from express
const app = express();

app.use(express.json({ extended: false }));

app.use(cors());

// connect with basedonne for mongoose
mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log('connected'))
  .catch((Error) => console.log(Error));

mongoose.Promise = global.Promise;

// function for show message in navigateur
app.get('/', (req, res) => {
  res.send('api working');
});

app.use('/', noteRoutes);
// create port
const port = process.env.PORT || 3200;

// start-up
app.listen(port, () => console.log('server runing at port' + port));
