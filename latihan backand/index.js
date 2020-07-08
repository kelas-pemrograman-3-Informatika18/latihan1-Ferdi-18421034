const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/latihanquasar'
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('berhasil connect')
}).catch((err) => {
  console.log('gagal connect ke database')
})

app.use(cors())

app.use(bodyParser.json({
  extended: true,
  limit: '20mb'

}))

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))

//list routes
app.use('/user', require('./routes/User'))

app.listen(5000, function () {
  console.log('Server Started at port 5000')
})
