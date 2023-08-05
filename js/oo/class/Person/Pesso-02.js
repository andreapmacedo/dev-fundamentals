
class Pessoa {
  nome;
  idade;
  filhos;

  constructor() {
    this.nome = 'Fulano';
    this.idade = 0;
    this.filhos = [];
  }
}

const pessoa = new Pessoa();

console.log(pessoa);
