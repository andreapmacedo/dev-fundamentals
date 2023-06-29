const test1 = (callback) => {
  setTimeout(() => {
    console.log('Teste 1');
  }, 200);
}

const test2 = (callback) => {
  setTimeout(() => {
    console.log('Teste 2');
    callback();
  }, 600);
}

const test3 = (callback) => {
  setTimeout(() => {
    console.log('Teste 3');
  }, 300);
}

const test4 = (callback) => {
  setTimeout(() => {
    console.log('Teste 4');
  }, 1);
}

const funcaoCallBack = () => {
  console.log('Salvou o usuário');
}

// test1();
// console.log(1+1);
test2(funcaoCallBack);
// test3();
// console.log(2+2);
// test4();