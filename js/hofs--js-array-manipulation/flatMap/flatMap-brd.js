/**
*
* O método flatMap() é uma função que aplica uma função a cada elemento de um array e retorna um novo array com os resultados. A função passada para flatMap() recebe o valor atual do elemento como parâmetro e deve retornar um array. O novo array será composto por todos os elementos retornados pelas funções passadas a flatMap().
* Por exemplo, o seguinte código usa flatMap() para multiplicar cada número em um array por 2:
*/

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.flatMap((number) => [number * 2]);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]


/**
 * 
 * O método flatMap() também pode ser usado para converter um array de objetos em um array de propriedades. Por exemplo, o seguinte código usa flatMap() para converter um array de objetos em um array de nomes:
 * 
 */

const objects = [{ name: "John Doe", age: 30 }, { name: "Jane Doe", age: 25 }];
const names = objects.flatMap((object) => [object.name]);
console.log(names); // ["John Doe", "Jane Doe"]


/**
 * 
 * O método flatMap() é uma ferramenta poderosa que pode ser usada para uma variedade de tarefas. É uma função relativamente nova, mas já está disponível na maioria dos navegadores modernos.
 *
*/
