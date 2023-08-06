interface retornaString {
  funcao: () => string;
}
interface retornaNumber {
  funcao: () => number;
}

// tipagem implícita pelo tipo de retorno
const funcaoRetornaStringImplicito = () => {
  return "";
};

// tipagem implícita pelo tipo de retorno
const funcaoRetornaNumeroImplicito = () => {
  return 1+1;
};

const funcaoRetornaString = (): string => {
  return "";
};


const funcaoRetornaNumero = (): number => {
  return 1+1;
};

const teste03: ObjetoQualquer = {
  funcao: funcaoRetornaString,
};

