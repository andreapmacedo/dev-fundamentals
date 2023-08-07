const list = [
  { name: 'andré',
    age: 30,
    exibition: true
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
// console.log(list);

console.log(list.find(person => person.age > 25));

const findPerson = list.find((person) => person.age > 25)

console.log(findPerson);

const findPersonByName = list.find((person) => person.name === 'maria')

// if not found, returns undefined


// Usando uma função declarada
const findPersonByName2 = (person) => person.name === 'maria'

console.log(list.find(findPersonByName2));

