interface ObjetoQualquer02 {
  funcao: (param1: number, param2?: number) => number;
}

const funcaoTeste02 = (param1: number, param2?: number): number => {
  if (!param2) {
    return param1;
  }

  return param1 + param2;
};

const objetoQualqer02: ObjetoQualquer02 = {
  funcao: funcaoTeste02,
};

console.log(objetoQualqer02.funcao(1));