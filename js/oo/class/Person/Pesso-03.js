
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

const pessoa = new Pessoa('joao', 30, ['maria', 'jose']);

console.log(pessoa);
