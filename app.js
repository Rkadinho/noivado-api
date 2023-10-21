const express = require('express');
const app = express();
const URL_PORT = process.env.PORT || 3000;
const cors = require('cors');

const URL_ORIGIN = process.env.ORIGIN

const guestsRoutes = require('./routes/guestsRoutes');
const giftsRoutes = require('./routes/giftsRoutes');

const customCorsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', URL_ORIGIN || '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Options-Success', '204');
  next();
};

app.use(customCorsMiddleware);

app.use(express.json());

app.use('/guests', guestsRoutes);
app.use('/gifts', giftsRoutes);

app.listen(URL_PORT, () => {
  console.log(`Servidor rodando na porta ${URL_PORT}`);
});