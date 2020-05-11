

module.exports = function (injectedStore) {
  const COLLECTION = 'dna'
  let store = injectedStore
  if (!store) {
    store = require('../../../store/adnStats')
  }


  async function list () {
    return await store.list(COLLECTION)
  }

  async function jsonReturn (){
    //const dna = list()
    const countMutations = await store.mutationsCount(COLLECTION)
    const countNoMutation = await store.noMutationsCount(COLLECTION)
    const ratio = getRatio(countMutations,countNoMutation)
    return {
      "count_mutations": countMutations,
      "count_no_mutation": countNoMutation,
      "ratio": ratio   
    }
  }

  function getRatio(countMutations,countNoMutation){
    return countMutations/countNoMutation
  }

  

  return {
    jsonReturn
  }
}