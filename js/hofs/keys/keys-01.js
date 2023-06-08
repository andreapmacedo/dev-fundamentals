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
// console.log(list);

// const person = {
//   andre: {
//     age: 30,
//   },
//   joao: {
//     age: 20,
//   },
//   maria: {
//     age: 25,
//   },
//   jose: {
//     age: 40,
//   }
// }

// console.log(person.andre.age);

const personList = list.reduce((acc, object) => {
  return {
    ...acc,
    [object.name]: {
      age: object.age
    }
  }
}, {})

console.log(personList);

console.log(personList.maria);
console.log(personList.maria.age);


const reduceFunction = (acc, object) => {
  return {
    ...acc,
    [object.name]: {
      age: object.age
    }
  }
}

const personList2 = list.reduce(reduceFunction, {})

console.log(personList.andre);


const keys =  Object.keys(personList)

console.log(keys);


const backList = keys.map((key) => {
  return {
    name: key,
    age: personList[key].age
  }
})

console.log(backList);