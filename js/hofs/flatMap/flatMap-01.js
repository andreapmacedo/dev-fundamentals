const list = [
  { name: 'andre',
    age: 30,
    cards: ['3322', '3323', '3324']
  },
  { name: 'joao',
    age: 20,
    cards: ['4412', '2313', '3224']
  },
  { name: 'maria',
    age: 25,
    cards: ['6422', '7423', '8324']
  },
  { name: 'jose',
    age: 40,
    cards: ['6322', '3423', '5324']
  }
]

const cardsMap = list.map((object) => object.cards) // Return a list of lists
console.log(cardsMap);

const cardsFlatMap = list.flatMap((object) => object.cards) // Return a list with all elements
console.log(cardsFlatMap);

