


function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker(); // "gen" é um gerador

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
