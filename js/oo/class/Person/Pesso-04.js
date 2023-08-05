
class Pessoa {
  nome;
  idade;
  filhos;

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

console.log(pessoa_01.nome);
console.log(pessoa_01.idade);
console.log(pessoa_01.filhos);
console.log(pessoa_01.filhos[0]);