class Usuario {
  nome;
  email;
  senha;

  validarSenha(email, senha) {
    return this.email === email && this.senha === senha;
  }
  
  
  constructor(nome, email, senha) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

}

class Administrador extends Usuario {
  permissoes;
  fraseSecreta = 'screaming goat';

  validarSenha(email, senha, fraseSecreta) {
    return this.email === email && this.senha === senha && this.fraseSecreta === fraseSecreta;
  }
  
  constructor(nome, email, senha, permissoes) {
    super(nome, email, senha);
    this.permissoes = permissoes;
  }

}

class Cliente extends Usuario {
  compras;
}

const usuario =  new Usuario('Fulano', 'fulano@email.com', '123');


console.log(usuario.validarSenha('Fulano', '123')); // false 
console.log(usuario.validarSenha('fulano@email.com', '123')); // true

const admin = new Administrador('Fulano', 'fulano@email.com', '123');

console.log(admin.validarSenha('Fulano', '123')); // false
console.log(admin.validarSenha('fulano@email.com', '123')); // false
console.log(admin.validarSenha('fulano@email.com', '123', 'screaming goat')); // true
