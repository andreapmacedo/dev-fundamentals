// Object.defineProperties - várias propriedades
// Object.defineProperty - uma propriedade

class Usuario {
  nome;
  email;
  senha;

  constructor(nome, email, senha) {
    this.email = email;
    this.senha = senha;
    Object.defineProperty(this, 'nome', {
      enumerable: false, // false -> não aparece no Object.keys(), true -> aparece no Object.keys()
      configurable: false, // false -> não pode ser deletado, true -> pode ser deletado delete usuario.nome
      writable: false, // false -> não pode ser alterado, true -> pode ser alterado usuari.nome = 'Outro nome'
      value: nome
    });
  }
}

const usuario = new Usuario('Fulano', 'fulano@email');

console.log(usuario); // Usuario { email: email, senha: undefined } nome não aparece pois o enumerable é false