class Usuario {
  nome;
  email;
  senha;
}

class Administrador extends Usuario{
  permissoes;
}

class Cliente extends Usuario {
  compras;
}