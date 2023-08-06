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
      senha: propriedadePadrao(senha),
      email: {
        get: () => email,
        set: (valor) => email = value
      }
    });
  }
}

const usuario = new Usuario('Fulano', 'fulano@email', '123');
usuario.email = 'outroemail'; // vai funcionar como antes 


console.log(usuario); 