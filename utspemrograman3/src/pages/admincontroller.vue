const adminModel = require('../model/admin')
const bcrypt = require('bcrypt')

exports.login = (data) =>
new Promise((resolve, reject) => {
  adminModel.findOne({
    username: data.username
  }).then((admin) => {
    if (admin) {
      if(bcrypt.compareSync(data.password, admin.password)) {
        resolve({
          sukses: true,
          pesan: 'Berhasil Login',
          data: admin
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