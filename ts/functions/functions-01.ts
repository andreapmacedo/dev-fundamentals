interface ObjetoQualquer {
  funcao: () => string;
}

const funcaoTeste01 = (): string => {
  return "fjkdfjdk"
};

const teste: ObjetoQualquer = {
  funcao: funcaoTeste01,
};
