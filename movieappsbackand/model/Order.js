const mongoose = require('mongoose')
const Schema = mongoose.Schema
const objectId = mongoose.ObjectId

const OrderSchema = new Schema({
  idUser: {
    type: objectId
  },
  idFilm: {
    type: objectId
  },
  harga: {
    type: Number
  },
  jumlah: {
    type: Number
  },
  total: {
    type: Number
  },
  image: {
    type: String
  },

  status: {
  type: Number,
  default: 1
  }
})

module.exports = mongoose.model('order', OrderSchema)