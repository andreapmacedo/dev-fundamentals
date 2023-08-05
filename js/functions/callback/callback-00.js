const test = (callback) => {
  console.log('Teste 1');
  setTimeout(() => {
    console.log('Teste 2');
    callback();
  }, 2000);
}

const funcaoCallBack = () => {
  console.log('Salvou o usuário');
}

test(funcaoCallBack);
