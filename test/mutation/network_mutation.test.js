const dataForTest = require('../dataForTest')
const testServer = require('../testServer')

const MUTATION_URL = '/mutation'

describe("Test the mutation enpoint",() =>{
  it("This adn chain has a mutation", done => {
    testServer().post(MUTATION_URL).send(dataForTest.mutationTrue).then(response => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })
  it("This adn chain dont have a mutation", done => {
    testServer().post(MUTATION_URL).send(dataForTest.mutationFalse).then(response => {
      expect(response.statusCode).toBe(403)
      done()
    })
  })
  it("Check five chain", done => {
    testServer().post(MUTATION_URL).send(dataForTest.fiveChainMutation).then(response => {
      expect(response.statusCode).toBe(501)
      done()
    })
  })
  it("Check seven chain", done => {
    testServer().post(MUTATION_URL).send(dataForTest.sevenChainMutation).then(response => {
      expect(response.statusCode).toBe(501)
      done()
    })
  })
  it("Check lowecase character chain", done => {
    testServer().post(MUTATION_URL).send(dataForTest.dnaWithMinusCharacter).then(response => {
      expect(response.statusCode).toBe(501)
      done()
    })
  })
  it("Check a chain with out a character", done => {
    testServer().post(MUTATION_URL).send(dataForTest.dnaWithAnonCharacter).then(response => {
      expect(response.statusCode).toBe(501)
      done()
    })
  })
  it("Check chain with stange character", done => {
    testServer().post(MUTATION_URL).send(dataForTest.dnaWithStrangeCharacter).then(response => {
      expect(response.statusCode).toBe(501)
      done()
    })
  })
})

describe("Test the response snapshot", () =>{
  it("Check Mutation response Snapshot", done => {
    testServer().post(MUTATION_URL).send(dataForTest.mutationTrue).then(response => {
      const text = response.text
      expect(JSON.stringify(text)).toMatchSnapshot()
      done()
    })
  })
  it("Check Not mutation response Snapshot", done => {
    testServer().post(MUTATION_URL).send(dataForTest.mutationFalse).then(response => {
      const text = response.text
      expect(JSON.stringify(text)).toMatchSnapshot()
      done()
    })
  })
  it("Check Error Mutation response Snapshot", done => {
    testServer().post(MUTATION_URL).send(dataForTest.mutationFalse).then(response => {
      const text = response.text
      expect(JSON.stringify(text)).toMatchSnapshot()
      done()
    })
  })
})