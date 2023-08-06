const funcaoCallback03 = (valor: number): void => {
  console.log("DEU BOM " + valor);
};

const funcaoTeste03 = (valor1: number, valor2: number, callback: (n: number) => void): string => {
  if (valor1 > valor2) {
    callback(valor1);
  }
  return "";
};

funcaoTeste03(654, 32, funcaoCallback03);
funcaoTeste03(43, 332, (x: number) => {
  console.log("outra funcao" + x);
});