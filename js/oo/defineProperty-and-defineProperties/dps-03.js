// Object.defineProperties - várias propriedades
// Object.defineProperty - uma propriedade

const propriedadePadrao = (valorInicial) => ({
  value: valorInicial,
  enumerable: true,
  configurable: false,
  writable: false
});


class Usuario {
  constructor(nome, email, senha) {
    Object.defineProperties(this, {
      nome: propriedadePadrao(nome),
      email: propriedadePadrao(email),
      senha: propriedadePadrao(senha)
    });
  }
}

const usuario = new Usuario('Fulano', 'fulano@email', '123');

console.log(usuario); 