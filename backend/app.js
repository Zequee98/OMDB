const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const Strategy = require('passport-local').Strategy;


//conecto la base de datos
mongoose.connect("mongodb://localhost/users");

//importo los modelos
const User = require('./backend/models/user.js')

const app = express();
// view engine setup
app.set('view engine', 'ejs');

//session
app.use(session({
  secret: 'cualquierCosa',
  resave: false,
  saveUninitialized: true,
}));

// inicializo passport
app.use(passport.initialize());
app.use(passport.session());

// defino la estrategia de autenticacion
passport.use(new Strategy(User.authenticate()));

// defino las funciones de serializacion y deserializacion
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(err){
  if(err) return console.log(err);
  console.log('Escuchando en puerto 3000')
})
