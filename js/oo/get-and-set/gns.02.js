const propriedadePadrao = (valorInicial) => ({
  value: valorInicial,
  enumerable: true,
  configurable: false,
  writable: false
});


class Usuario {
  constructor(nome, email, senha) {
    Object.defineProperties(this, {
      nome: {
        get: () => nome,
        set: (valor) => {
          if (typeof valor !== 'string' && valor.length > 10) {
            throw new Error('Precisa ter mais que 10 caracteres');
          }
          nome = valor;
        }
      },
      senha: {
        get: () => senha,
        set: (valor) => {
          if (typeof valor !== 'string' && valor.length > 3) {
            throw new Error('Precisa ter mais que 3 caracteres');
          }
          senha = valor;
        }
      },
      email: {
        get: () => email,
        set: (valor) => {
          if (typeof valor !== 'string' && !valor.includes('@')) {
            throw new Error('O valor precisa ser um email');
          }
          email = valor;
        }
      }
    });
  }
}

const usuario = new Usuario('Fulano', 'fulano@email', '123');

console.log(usuario); 