interface Carro01 {
  idade: number | string;
  nome: string;
}

interface Bicicleta01 {
  rodas: number;
}

const funcao01 = (validacao: boolean): Carro01 | Bicicleta01  => {
  if (validacao) {
    return {
      idade: 54,
      nome: "gol",
    };
  }
  return {
    rodas: 4,
  };
};

const resultado01 = funcao01(false);


if ("idade" in resultado01) {
  if (typeof resultado01.idade === "string") {
    console.log(resultado01.idade);
  }
}

if ("rodas" in resultado01) {
  console.log(resultado01.rodas);
}