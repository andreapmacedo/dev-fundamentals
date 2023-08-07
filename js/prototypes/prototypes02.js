/**
 * 
Este é um pedaço de código em JavaScript que adiciona um novo método chamado template a todos os objetos de string no ambiente.

O método template usa uma expressão regular para substituir partes da string que correspondem ao padrão entre chaves {} por propriedades do objeto passado como argumento. Dentro das chaves, pode haver qualquer coisa que não seja uma chave, daí a expressão regular ([^{}]*).

O que a função faz é o seguinte:

Ela usa o método replace de uma string para substituir partes da string que correspondem a uma expressão regular. A expressão regular procura qualquer coisa entre chaves {}. Cada correspondência é passada para uma função callback.

A função callback recebe dois argumentos: a, que é a correspondência completa (incluindo as chaves), e b, que é o conteúdo entre as chaves.

A função callback tenta encontrar uma propriedade no objeto o que corresponda a b. Se a propriedade existir e seu valor for uma string ou um número, esse valor será retornado, e a correspondência na string original será substituída por esse valor.

Se a propriedade não existir, ou se seu valor não for uma string ou um número, a função callback retorna a, que é a correspondência original, incluindo as chaves. Isso significa que a correspondência na string original será substituída por si mesma, efetivamente deixando-a inalterada.

Portanto, esse código permite substituir partes de uma string por valores de propriedades de um objeto de uma maneira muito conveniente. Por exemplo, você poderia usar assim:
 * 
 * 
 */


String.prototype.template = function (o) {
  return this.replace(/{([^{}]*)}/g,
    function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    }
  );
};

// exemplo de uso
var str = "Olá, {nome}! Você tem {idade} anos.";
var obj = { nome: "João", idade: 25 };
console.log(str.template(obj));  // Saída: "Olá, João! Você tem 25 anos."