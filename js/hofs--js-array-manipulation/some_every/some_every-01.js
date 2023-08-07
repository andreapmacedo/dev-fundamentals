const list = [
  { name: 'andre',
    age: 30,
    exibition: true
  },
  { name: 'joao',
    age: 20,
  },
  { name: 'maria',
    age: 25,
  },
  { name: 'jose',
    age: 40,
  }
]

const resultSome = list.some((object) => object.age > 30)
console.log(resultSome);

const resultEvery = list.every((object) => object.age > 30)
console.log(resultEvery);