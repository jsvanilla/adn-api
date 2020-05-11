const express = require('express')

const response = require('../../../network/response')
const Controller = require('./index_mutation')

const router = express.Router()

// Routes
router.post('/', mutationResult)


// aqui cambia la respuesta segun lo que el
// controlador arroje sobre la mutacion del ADN
function mutationResult (req, res) {
  if(Controller.postArgumentValid(req.body.dna) && Controller.validProteins(req.body.dna)){
    Controller.hasMutation(req.body.dna)
    .then((result) => {
      response.success(req, res, result.text, result.status)
    })
    .catch((err) => {
      response.error(req, res, err.message, 500)
    })
  } else {    
    response.error(req, res, "La cadena de ADN mandada no cumple con el standard 6 cadenas de 6 proteínas o contiene caracteres fuera de ATCG", 501)
  }
  
}

module.exports = router
