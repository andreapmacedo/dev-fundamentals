// ref Julio Souza - Udemy -  Seção 11:Async/Await
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const aguardarComRetorno = async (tempo = 2000) => {
  await sleep(tempo);
  return 'Retorno da promise';
}

console.log(aguardarComRetorno()); //  Promise { <pending> }
aguardarComRetorno().then(console.log); // Retorno da promise

const executar = async () => {
  const valor = await aguardarComRetorno();
  console.log(valor);
}

// como a função é async, o await aguarda o retorno da promise
executar(); // Retorno da promise