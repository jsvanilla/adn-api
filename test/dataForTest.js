const mutationFalse = {
	"dna": ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]
}

const mutationTrue = {
	"dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}

const fiveChainMutation = {
	"dna": ["ATGCGA","ATGCGA","ATGCGA","ATGCGA","ATGCGA"]
}

const sevenChainMutation = {
	"dna": ["ATGCGA","ATGCGA","ATGCGA","ATGCGA","ATGCGA","ATGCGA","ATGCGA"]
}

const dnaWithMinusCharacter = {
	"dna": ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGtCA","TCACTG"]
}

const dnaWithAnonCharacter = {
	"dna": ["ATGCGA","CAGTGC","TTATOT","AGACGG","GCGTCA","TCACTG"]
}

const dnaWithStrangeCharacter = {
	"dna": ["ATGCGA","CAGTGC","TTAT^T","AGACGG","GCGTCA","TCACTG"]
}

module.exports= {
  mutationFalse,
  mutationTrue,
  fiveChainMutation,
  sevenChainMutation,
  dnaWithMinusCharacter,
  dnaWithAnonCharacter,
  dnaWithStrangeCharacter
}

