// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const aguardarComRetorno = async (tempo = 2000) => {
  await sleep(tempo);
  return 'Retorno da promise';
}

const aguardar = async () => {
  console.log('Antes da promise');
  // sleep(3000);
  // setTimeout(() => {
  //   console.log('Executando promise...'), 1000
  //   });
  console.log('Passo 1');
  console.log('Passo 2');
  console.log('Passo 3');
  console.log('Passo 4');
}

// aguardar();
console.log(aguardarComRetorno()); //  Promise { <pending> }
aguardarComRetorno().then(console.log); // Retorno da promise

const executar = async () => {
  const valor = await aguardarComRetorno();
  console.log(valor);
}

// como a função é async, o await aguarda o retorno da promise
executar(); // Retorno da promise