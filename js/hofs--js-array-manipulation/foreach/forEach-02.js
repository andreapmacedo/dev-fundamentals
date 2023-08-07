
/**
  services.forEach(({ nome }) => {...}): services é uma lista (array) de objetos. O método forEach é uma função de array que executa uma função para cada item no array. Neste caso, ele está usando a desestruturação para pegar a propriedade nome de cada objeto de serviço.
  icons[nome] = useSelector(({ sync }) => sync[nome].icon);: Para cada serviço, o código está usando o hook useSelector para acessar o estado Redux. Ele espera que o estado Redux seja um objeto com uma propriedade sync, que por sua vez é um objeto que tem uma propriedade para cada nome de serviço. Cada um desses objetos de serviço, por sua vez, tem uma propriedade icon. O useSelector retorna o valor dessa propriedade icon e o código armazena esse valor no objeto icons, usando nome como a chave.
 */


// Exemplo de estado Redux
state = {
  sync: {
    service1: {
      icon: 'icon1',
      // outras propriedades...
    },
    service2: {
      icon: 'icon2',
      // outras propriedades...
    },
    // etc...
  },
  // outras partes do estado...
};

// Exemplo de array services
services = [
  { nome: 'service1' },
  { nome: 'service2' },
  // etc...
];


const icons = { };

services.forEach(({ nome }) => {
  icons[nome] = useSelector(({ sync }) => sync[nome].icon);
});


// Nesse cenário, depois que o código for executado, o objeto icons pareceria assim:
icons = {
  service1: 'icon1',
  service2: 'icon2',
  // etc...
};
