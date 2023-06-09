const aguardar = (tempo = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}


console.log('Antes da promise');

aguardar(2000).then(() => console.log('Executando promise 1...'))
aguardar(2000).then(() => console.log('Executando promise 2...'))
aguardar(2000).then(() => console.log('Executando promise 3...'))