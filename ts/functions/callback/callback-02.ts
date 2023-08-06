
const funcaoCallback02 = (valor: number): void => {
  console.log("deu bom" + valor);
};

const testeCallback02 = (
  valor1: number,
  valor2: number,
  callback: (n: number) => void
): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "";
};

// testeCallback02(1, 1, funcaoCallback01);
testeCallback02(1, 2, funcaoCallback01);