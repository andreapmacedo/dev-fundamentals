/*
 * 
 * useSelector é um hook do React-Redux que permite acessar o estado da store Redux em componentes funcionais do React.

Redux é uma biblioteca JavaScript para gerenciar o estado do aplicativo de forma previsível. É mais comumente usada com bibliotecas de interface do usuário, como React ou Angular, para construir aplicativos de página única.

No passado, se você quisesse acessar o estado Redux em um componente funcional, teria que envolver o componente em uma função de ordem superior connect(). No entanto, com a introdução dos Hooks do React na versão 16.8, o Redux também introduziu alguns hooks para simplificar o uso do Redux com componentes funcionais. Um desses hooks é o useSelector.

useSelector aceita um único argumento: uma função de seleção. Essa função de seleção é chamada com todo o estado da store Redux como seu argumento, e o valor que você retorna será retornado pelo hook useSelector. O hook useSelector irá rodar sua função de seleção e usar a igualdade de referência (===) para comparar o resultado com o resultado da última vez que a função de seleção foi executada. Se os resultados forem diferentes, o componente será renderizado novamente.
 * 
 */


import React from 'react';
import { useSelector } from 'react-redux';

function MyComponent() {
  const myValue = useSelector(state => state.myValue);
  
  return <div>{myValue}</div>;
}

/**
 * Neste exemplo, o estado Redux é esperado para ter uma propriedade myValue, que é extraída e retornada pela função de seleção. O valor retornado é então armazenado na constante myValue, que pode ser usada no componente. Sempre que state.myValue mudar na store Redux, useSelector irá disparar uma nova renderização do componente com o novo valor.
 */