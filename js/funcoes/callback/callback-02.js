const test1 = () => {
  setTimeout(() => {
    console.log('Teste 1');
  }, 200);
}

const test2 = () => {
  setTimeout(() => {
    console.log('Teste 2');
  }, 600);
}

const test3 = () => {
  setTimeout(() => {
    console.log('Teste 3');
  }, 300);
}

const test4 = () => {
  setTimeout(() => {
    console.log('Teste 4');
  }, 1);
}


test1();
console.log(1+1);
test2();
test3();
console.log(2+2);
test4();