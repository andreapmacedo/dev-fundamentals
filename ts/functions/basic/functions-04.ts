interface ObjetoQualquer04 {
  funcao: (param1: number, param2?: number) => number;
}

/**
 * Os parâmetros opcionais devem ser declarados após os obrigatórios.
 */

const funcaoTeste04 = (param1: number, param2?: number): number => {
  if (!param2) {
    return param1;
  }

  return param1 + param2;
};

const objetoQualqer04: ObjetoQualquer04 = {
  funcao: funcaoTeste04,
};

console.log(objetoQualqer04.funcao(2, 2));