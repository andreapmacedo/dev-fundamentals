
const funcaoCallback01 = (): void => {
  console.log("deu bom");
};

const testeCallback01 = (
  valor1: number,
  valor2: number,
  callback: () => void
): string => {
  if (valor1 === valor2) {
    callback();
  }
  return "";
};

testeCallback01(1, 1, funcaoCallback01);