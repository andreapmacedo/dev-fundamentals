const lista = [1, 2, 3, 4, 5];
const lista2 = [6, 7, 8, 9, 10];


console.log(lista);
console.log(lista2);


console.log(...lista, ...lista2);

const listaJunta = [...lista, ...lista2];

console.log(listaJunta);

const listaJunta2 = [...lista, 6, 7, 8, 9, 10];


console.log(listaJunta2);

const listaJunta3 = [1, 2, 3, 4, 5, ...lista2];


console.log(listaJunta3);

const listaJunta4 = [1, 2, 3, 4, 5, ...lista2, 11, 12, 13, 14, 15];
console.log(listaJunta4);

const listaJuntaConcat = lista.concat(lista2);

console.log(listaJuntaConcat);