exports.success = function (req, res, message, status) {
  const statusCode = status || 200
  const statusMessage = message || ''
  res.status(statusCode).send({
    error: false,
    status: status,
    body: statusMessage
  })
}

exports.error = function (req, res, message, status) {
  const statusCode = status || 500
  const statusMessage = message || 'No se puede procesar la mutacion de ADN por un error en el servidor :('
  res.status(statusCode).send({
    error: true,
    status: status,
    body: statusMessage
  })
}
