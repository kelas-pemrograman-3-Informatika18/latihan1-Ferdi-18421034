const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/tiketdamri'
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('berhasil connect ke database')
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
// list route

app.use('/user', require('./routes/user'))
app.use('/admin', require('./routes/admin'))

app.listen(5020, function () {
  console.log('server telah dijalankan di port 5020')
})
