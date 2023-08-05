/**

O flatMap é um método no protótipo do Array em JavaScript, que foi introduzido na especificação ECMAScript 2019. O método flatMap combina a funcionalidade de map e flat em uma única operação.

O método map cria um novo array com os resultados da chamada de uma função fornecida em cada elemento do array de chamada. O método flat cria um novo array com todos os elementos de sub-array concatenados nele recursivamente até a profundidade especificada.

Portanto, flatMap primeiro mapeia cada elemento usando uma função de mapeamento, em seguida, nivelará o resultado em um novo array. É útil quando você deseja usar uma função que retorna um array, mas então deseja nivelar o resultado.

 */

let novo_array = arr.flatMap(função[, thisArg])


let arr = [1, 2, 3, 4, 5];

let newArr = arr.flatMap(x => [x * 2]); // [2, 4, 6, 8, 10]
