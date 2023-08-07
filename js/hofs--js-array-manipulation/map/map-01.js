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
console.log(list.map(item => item));
// console.log(list.map(item => item.name));

const same = (item) => {
  return item.name
}
// console.log(list.map(same));

const convertObject = (item) => {
  return {
    name: item.name,
    age: item.age,
    nameAge: `${item.name} + ${item.age}`
  }
}
// console.log(list.map(convertObject));


// neste caso, o nameAge é adicionado ao objeto
const convertObjectWithSpread = (item) => {
  return {
    ...item,
    nameAge: `${item.name} + ${item.age}`
  }
}
// console.log(list.map(convertObjectWithSpread));


// Neste caso, o age será sobrescrito
const convertObjectWithSpreadObs = (item) => {
  return {
    ...item,
    age: `${item.name} + ${item.age}`
  }
}
console.log(list.map(convertObjectWithSpreadObs));