const userModel = require('../model/user')
const bcrypt = require('bcrypt')

exports.registerr = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      name: data.name
    }).then(user => {
      if (user) {
        reject({
          sukses: false,
          pesan: "Username Sudah Terdaftar"
        })
      } else {
        bcrypt.hash(data.password, 10, (err, hash) => {
          data.password = hash
          userModel.create(data)
            .then(() => {
              resolve({
                sukses: true,
                pesan: 'Berhasil Registrasi'
              })
            }).catch(() => {
              reject({
                gagal: false,
                pesan: 'Gagal Registrasi'
              })
            })
        })
      }
    })
  })

  exports.login = (data) =>
  new Promise((resolve, reject) => {
    userModel.findOne({
      name: data.name
    }).then((user) => {
      if (user) {
        if(bcrypt.compareSync(data.password, user.password)) {
          resolve({
            sukses: true,
            pesan: 'Berhasil Login',
            data: user
          })
        } else {
          reject({
            sukses: false,
            pesan: 'Password Salah'
          })
        }
      } else {
        reject({
          sukses: false,
          pesan: 'Username Tidak Terdaftar'
        })
      }
    })
  })