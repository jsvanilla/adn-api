const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index_stats')

const router = express.Router()

// Routes
router.get('/', statsResult)

function statsResult(req,res){
  Controller.jsonReturn()
    .then((result) => {
      response.success(req, res, result, 200)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500)
    })
}


module.exports = router