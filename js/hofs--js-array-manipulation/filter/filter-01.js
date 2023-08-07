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

const filterList = list.filter((person) => {
  return person.age > 25
})

console.log(filterList);

const filterList2 = list.filter( person => person.age > 25)
console.log(filterList2);

const filterList3 = list.filter((person) => person.age > 25)
console.log(filterList3);


console.log(list.filter( person => person.exibition)); 
console.log(list.filter( person => !!person.exibition));  // !! converte para booleano. É necessário para quando estamos utilizando typescript

const whithoutAnonymousFunction = (person) => person.age > 25

console.log(list.filter(whithoutAnonymousFunction));