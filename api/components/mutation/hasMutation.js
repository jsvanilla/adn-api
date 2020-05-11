
function fourProteins(chain){
  const proteins = ['AAAA','TTTT','CCCC','GGGG']
  for(let protein of proteins){
    if(chain.includes(protein)){
      return true
    }
  }
  return false
}

function horizontalVerification(elements){
  let coincidences = 0;
  for(let element of elements){
    if(fourProteins(element)){
      coincidences++
    }
  }
  return coincidences
}

function verticalVeritication(elements){
  let coincidences = 0;
  for(let i = 0; i <= elements.length; i++){
    let verticalChain = [elements[0].substring(i,i+1),
    elements[1].substring(i,i+1),
    elements[2].substring(i,i+1),
    elements[3].substring(i,i+1),
    elements[4].substring(i,i+1),
    elements[5].substring(i,i+1),
    ]
    let functionargument = verticalChain.join('')
    if(fourProteins(functionargument)){
      coincidences++
    }
  }
  return coincidences
}


function calculateOblic(dna,arrayArgument){
  let oblic = []
  for(let i = 0; i < arrayArgument.length; i++){
    oblic.push(dna[arrayArgument[i][0]].substring(arrayArgument[i][1],arrayArgument[i][2]))
  }
  return oblic.join('')
}

function oblicVerification(dna){
  let coincidences = 0
  const oblicArray = [
    [[3,0,1],[2,1,2],[1,2,3],[0,3,4]],
    [[4,0,1],[3,1,2],[2,2,3],[1,3,4],[0,4,5]],
    [[5,0,1],[4,1,2],[3,2,3],[2,3,4],[1,4,5],[0,5,6]],
    [[5,1,2],[4,2,3],[3,3,4],[2,4,5],[1,5,6]],
    [[5,2,3],[4,3,4],[3,4,5],[2,5,6]],
    [[2,0,1],[3,1,2],[4,2,3],[5,3,4]],
    [[1,0,1],[2,1,2],[3,2,3],[4,3,4],[5,4,5]],
    [[0,0,1],[1,1,2],[2,2,3],[3,3,4],[4,4,5],[5,5,6]],
    [[0,1,2],[1,2,3],[2,3,4],[3,4,5],[4,5,6]],
    [[0,2,3],[1,3,4],[2,4,5],[3,5,6]]
  ]
  
  for (let i = 0; i < 10; i++){
    let oblicArgument = calculateOblic(dna,oblicArray[i])
    if(fourProteins(oblicArgument)){
      coincidences++
    } 
  }
  return coincidences
}


module.exports = {
  // mutationFunction
  horizontalVerification,
  verticalVeritication,
  oblicVerification
}