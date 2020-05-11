const dataForTest = require('../dataForTest')
const testServer = require('../testServer')

const MUTATION_URL = '/stats'

describe("Test the stats enpoint",() =>{
  it("This adn chain has a mutation", done => {
    testServer().get(MUTATION_URL).then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
})
