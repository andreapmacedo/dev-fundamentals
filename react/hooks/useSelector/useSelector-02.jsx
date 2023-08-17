
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
