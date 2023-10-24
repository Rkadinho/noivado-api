const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();

const URL_PORT = process.env.PORT
const URL_ORIGIN = process.env.ORIGIN || "*"

const guestsRoutes = require('./routes/guestsRoutes')
const giftsRoutes = require('./routes/giftsRoutes')

const corsOptions = {
  origin: URL_ORIGIN
}

run().catch(console.dir);

app.use(cors(corsOptions))

app.use(express.json())

app.use('/guests', guestsRoutes)
app.use('/gifts', giftsRoutes)

app.listen(URL_PORT, () => {
  console.log(`Servidor rodando na porta ${URL_PORT}`)
})
