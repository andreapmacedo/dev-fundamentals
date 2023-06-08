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

// list.sort((a, b) => {
//   if (a.age > b.age) {
//     return 1
//   }
//   if (a.age < b.age) {
//     return -1
//   }
//   return 0
// })


// list.sort((a, b) => {
//     return a.age - b.age
//   })
  
  // console.log(list);


  list.sort((a, b) => {
  if (a.name.toUpperCase() > b.name.toUpperCase()) {
    return 1
  }
  if (a.name.toUpperCase() < b.name.toUpperCase()) {
    return -1
  }
  return 0
})

console.log(list);