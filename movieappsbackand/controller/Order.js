const orderModel = require('../model/Order')
const { requestResponse } = require('../config')
const { isValidObjectId } = require('mongoose')
const objectId = require('mongoose').Types.ObjectId
//const { remove } = require('../model/Order')

exports.insert = (data) =>
new Promise((resolve, reject) => {
  try {
    orderModel.create(data)
    .then((a) => resolve(requestResponse.sukses('Berhasil memproses Data')))
    .catch(() => reject(requestResponse.serverError))
  } catch (error) {
    console.log(err)
  }
})

exports.getAllOrder = () =>
new Promise((resolve, reject) => {
  orderModel.aggregate([
    {
      $lookup: {
        from: "movies",
        localField: "idFilm",
        foreignField: "_id",
        as: "dataMovie"
      }
      },
      {
        $lookup: {
          from: "users",
          localField: "idUser",
          foreignField: "_id",
          as: "dataUser"
        }
      }
  ]).then(res => {
    resolve(requestResponse.suksesWidthData(res))
  }).catch(() => reject(requestResponse.serverError))
})

  exports.getOrderByUser = (id) =>
  new Promise((resolve, reject) => {
    orderModel.aggregate([
      {
        $match: {
          idUser: objectId(id)
        }
      },
      {
        $lookup: {
          from: "movies",
          localField: "idFilm",
          foreignField: "_id",
          as: "dataMovie"
        }
      }
    ]).then(res => {
      resolve(requestResponse.suksesWidthData(res))
    }).catch(() => reject(requestResponse.serverError))
  })

exports.konfirmasiOrder =(id) =>
new Promise((resolve, reject) => {
  try {
    orderModel.updateOne({
      _id: objectId(id)
      },
      {
        status: 2 
      }).then(() => resolve(requestResponse.sukses('Berhasil Mengkonfirmasi Order')))
      .catch(() => reject(requestResponse.serverError))
  } catch (error) {
    console.log(error)
  }
})

exports.terimaBarang =(id) =>
new Promise((resolve, reject) => {
  try {
    orderModel.updateOne({
      _id: objectId(id)
      },
      {
        status: 3
      }).then(() => resolve(requestResponse.sukses('Berhasil Menerima Order')))
      .catch(() => reject(requestResponse.serverError))
  } catch (error) {
    console.log(error)
  }
})