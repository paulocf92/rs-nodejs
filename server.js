const express = require('express');
const mongoose = require('mongoose');

// Iniciando o app
const app = express();

// Iniciando o DB
mongoose.connect(
  "mongodb://192.168.99.100:27017/nodeapi",
  { useNewUrlParser: true }
);

// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello RocketSeat!!');
});

app.listen(3001);