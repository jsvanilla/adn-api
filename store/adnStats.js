/*const db = {
  dna: [
    {
      "id": 0,
      "chain": ["jaguar", "mma", "ufc"],
      "mutation": true,
    },
    {
      "id": 1,
      "chain": ["jaguar", "mma", "ufc"],
      "mutation": true,
    },
    {
      "id": 2,
      "chain": ["jaguar", "mma", "ufc"],
      "mutation": false,
	  },
  ],
}; */

//const db = 
const mongoLib = require('./mongo')
const mongoDB = new mongoLib()


  

  // para poder listar cosas
  async function list (collection) {
    const db = await mongoDB.getAll(collection)
    return db
  }

  // para actualizar o insertar
  async function upsert (collection, data) {
    return mongoDB.create(collection,data)
  }

  async function mutationsCount(collection){
    const extract = await list(collection)
    const filterExtract = extract.filter(element => element.mutation === true)
    return filterExtract.length
  }

  async function noMutationsCount(collection){
    const extract =  await list(collection)
    const filterExtract = extract.filter(element => element.mutation === false)
    return filterExtract.length
  }



module.exports = {
  list,
  upsert,
  mutationsCount,
  noMutationsCount
}

