const qualquer = {
  nome: 'Qualquer',
  idade: 0,
  filhos: []
}

const novoQualquer = {
  nome: 'Qualquer',
  idade: 0,
  filhos: [],
  final: 'final'
}



const novoQualquerSpread = {
  ...qualquer,
  final: 'final'
}  


console.log(qualquer);
console.log(novoQualquer);
console.log(novoQualquerSpread);