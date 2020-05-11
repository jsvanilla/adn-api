const {nanoid} = require('nanoid')
const mutationFunction = require('./hasMutation')

const TABLE = 'dna'

module.exports = function (injectedStore) {
  let store = injectedStore
  if (!store) {
    store = require('../../../store/adnStats')
  }

  function validProteins (chains){
    const proteins = ['A','T','C','G']
    const newChain = chains.join('')

    for(let elementChain of newChain){
      if(!proteins.includes(elementChain)){
        return false
      }
    }
    return true
  }


  function postArgumentValid (postArgument){
    if(postArgument.length == 6 && postArgument[0].length == 6 
      && postArgument[1].length == 6 && postArgument[2].length == 6 
      && postArgument[3].length == 6 && postArgument[4].length == 6
      && postArgument[5].length == 6){
      return true
    } else {
      return false
    }
  }

  async function hasMutation(dna) {  // debe devolver true o false  acepta el array de strings
    if(mutationFunction.horizontalVerification(dna) + mutationFunction.verticalVeritication(dna) + mutationFunction.oblicVerification(dna) >= 2){
      upsert(dna, true)
      return { boolean: true, text: '¡ Se encontró una mutación en la cadena de ADN !', status: 200 }
    } else {
      upsert(dna, false)
      return { boolean:false, text: 'No se encontró mutación alguna en la cadena de ADN', status: 403 }
    }
  }


  function upsert (chain, mutation) {
    
    const adn = {chain, mutation }
    adn.id = nanoid()
    return store.upsert(TABLE, adn)
  }

  return {
    postArgumentValid,
    validProteins,
    hasMutation,
    upsert
  }
}
