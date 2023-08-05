
class Pessoa {
  nome;
  idade;
  filhos;

  quantidadeFilhos() {

    if (this.filhos) {
      return this.filhos.length;
    }
  }
  
  constructor(nome, idade, filhos) {
    this.nome = nome;
    this.idade = idade;
    this.filhos = filhos;
  }
}

const pessoa_01 = new Pessoa('joao', 30, ['maria', 'jose']);
const pessoa_02 = new Pessoa('alfredo', 34, ['marcos', 'joana']);
const pessoa_03 = new Pessoa('jessica', 34, ['jean']);

console.log(pessoa_01);
console.log(pessoa_02);
console.log(pessoa_03);

const pessoas = [pessoa_01, pessoa_02, pessoa_03];

console.log(pessoas);


console.log('Quantidade de filhos: ' + pessoa_01.quantidadeFilhos());