// Object.defineProperties - várias propriedades
// Object.defineProperty - uma propriedade

class Usuario {
  constructor(nome, email, senha) {
    Object.defineProperties(this, {
      nome: {
        enumerable: true, 
        configurable: false, 
        writable: false, 
        value: nome
      },
      email: {
        enumerable: true,
        configurable: false,
        writable: false,
        value: email
      },
      senha: {
        enumerable: false,
        configurable: false,
        writable: false,
        value: senha
      }
    });
  }
}

const usuario = new Usuario('Fulano', 'fulano@email', '123');

console.log(usuario); 