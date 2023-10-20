const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const URL_ORIGIN = process.env.ORIGIN

const guestsRoutes = require('./routes/guestsRoutes');
const giftsRoutes = require('./routes/giftsRoutes');

const corsOptions = {
  origin: 'https://noivado-front.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use('/guests', guestsRoutes);
app.use('/gifts', giftsRoutes);