const router = require('express').Router()
const userController = require('../controller/user')
router.post('/registerr', (req, res) => {
  userController.registerr(req.body)
    .then(result => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
})

module.exports = router
router.post('/login', (req, res) => {
  userController.login(req.body)
  .then(result => res.json(result))
  .catch((err) => res.json(err))
})