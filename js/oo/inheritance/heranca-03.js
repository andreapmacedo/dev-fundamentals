class Usuario {
  nome;
  email;
  senha;

  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

}

class Administrador extends Usuario {
  permissoes;

  constructor(nome, email, senha, permissoes) {
    super(nome, email, senha);
    this.permissoes = permissoes;
  }

}

class Cliente extends Usuario {
  compras;
}

const admin = new Administrador('Fulano', 'fulano@email.com', '123', [1,2]);

console.log(admin);