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

// for(let i = 0; i < list.length; i++) {
  // console.log(list[i].name)
  // console.log(list[i])
// }

// for(const item of list) {
  // console.log(item.name)
  // console.log(item)
// }


// list.forEach(item => {
//   console.log(item.name)
//   console.log(item)
// })

let sumAgeA = 0;

// usando função anônima
list.forEach((item) => {
  sumAgeA += item.age
})
console.log(sumAgeA)


let sumAgeB = 0;

const sumAgeFunction = (item) => {
  sumAgeB += item.age
}

// usando a função declarada
list.forEach(sumAgeFunction)

console.log(sumAgeB)

