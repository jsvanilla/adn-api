const store = require('../../../store/adnStats')
const controller = require('./controller_mutation')

module.exports = controller(store)
/* Esto nos permite independizar más el controlador de la base de datos,
en caso de que se quieran usar bases de datos especificas para pruebas */
