const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('GET request to the articles')
})

module.exports = router
