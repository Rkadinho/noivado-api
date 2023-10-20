const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const guestsRoutes = require('./routes/guestsRoutes');
const giftsRoutes = require('./routes/giftsRoutes');

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/guests', guestsRoutes);
app.use('/gifts', giftsRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});

var Parse = require('parse/node');

Parse.initialize("pZE5WRPLSk2FG7xzbdzMxur4G6pv0FKwqWgVSwTX","W7cE7zGTBVYX8RS8V0cEhCA8CZv9dXiSEAVFeVGO");
Parse.serverURL = 'https://parseapi.back4app.com/'