const list = [
  { name: 'andré',
    age: 30,
  },
  { name: 'joão',
    age: 20,
  },
  { name: 'maria',
    age: 25,
  },
  { name: 'josé',
    age: 40,
  }
]

// como fazer para stringNameAge ser reaproveitado em várias funções?
// const stringNameAge = `${item.name} + ${item.age}` não vai funcionar, pois não é uma função
// const stringNameAge = '${item.name} + ${item.age}' Não vai gerar ume erro, mas o que será adicionado será literalmente uma string '${item.name} + ${item.age}' e não os dados do objeto
const stringNameAge = (item) => `${item.name} + ${item.age}`; // Funciona pois é uma função


console.log(list.map(item => item.name));


const same = (item) => {
  return item.name
}
console.log(list.map(same));


// sobrescreve todo o objeto
const convertObject = (item) => {
  // const stringNameAge = `${item.name} + ${item.age}` não vai funcionar, pois não é uma função
  return {
    name: item.name,
    age: item.age,
    // nameAge: stringNameAge
    nameAge: stringNameAge(item)
  }
}
console.log(list.map(convertObject));

// Vai adicionar o nameAge ao objeto
const convertObjectWithSpread = (item) => {
  return {
    ...item,
    // nameAge: stringNameAge
    nameAge: stringNameAge(item)
  }
}
// console.log(list.map(convertObjectWithSpread));

// Vai sobrescrever o age
const convertObjectWithSpreadObs = (item) => {
  return {
    ...item,
    // age: stringNameAge
    age: stringNameAge(item)
    
  }
}
// console.log(list.map(convertObjectWithSpreadObs));