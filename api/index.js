const express = require('express')
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express')

const config = require('../config.js')
const geneticMutation = require('./components/mutation/network_mutation')
const statsModule = require('./components/stats/network_stats')

const app = express()

app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')

// ROUTER
app.use('/mutation', geneticMutation) // POST /mutation
app.use('/stats', statsModule)  // GET /stats
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.listen(config.api.port, () => {
  console.log(`Api escuchando en el puerto ${config.api.port}`)
})
