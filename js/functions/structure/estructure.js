// Função Declarativa ou Função de Declaração (Function Declaration)
function nomeDaFuncao(parametro1, parametro2) {
  // código da função
}


// Expressão de Função (Function Expression)
let nomeDaFuncao = function(parametro1, parametro2) {
  // código da função
};


// Função de Seta ou Arrow Function (ES6)
let nomeDaFuncao = (parametro1, parametro2) => {
  // código da função
};

// Para Arrow Function com apenas um parâmetro, você pode remover os parênteses:
let nomeDaFuncao = parametro => {
  // código da função
};

// E para Arrow Function com um único comando, você pode remover as chaves:
// let nomeDaFuncao = parametro => // única instrução;

let nomeDaFuncao = () => {} 

let nomeDaFuncao = _ => {} 

// Funções Auto-invocáveis ou IIFE (Immediately Invoked Function Expression)
(function() {
  // código da função
})();

// ou
(function(parametro1, parametro2) {
  // código da função
})(valor1, valor2);


// Função Construtora (Constructor Function)
function NomeDaFuncao(parametro1, parametro2) {
  this.parametro1 = parametro1;
  this.parametro2 = parametro2;
  // mais código da função
}

let objeto = new NomeDaFuncao(valor1, valor2);

// Função Geradora (Generator Function)
function* nomeDaFuncao(parametro1, parametro2) {
  yield valor1;
  yield valor2;
  // mais código da função
}
