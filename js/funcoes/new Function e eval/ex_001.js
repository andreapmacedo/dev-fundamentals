





// O método eval() avalia código JavaScript representado como uma string.

// O construtor Function cria um novo objeto de função anonima. No Javascript todas as funções atualmente são um objeto de função.




var a = new Function('', 'return (1+1)');
var b = eval("2 + a()");
var c = b + a();
var d = new Function("p", "return a() + b + c + p");
var e = eval("d(10) - 20");

console.log(a())   // 2
console.log(b)     // 4
console.log(c)     // 6
console.log(d(10)) // 22
console.log(e);    // 2