import { useEffect, useState } from "react";


function notifyApi() {
  console.log("notifyApi");
}

export function App() {
  const [list, setList] = useState([]);

  const


  // O useEffect é um hook que permite executar efeitos colaterais em componentes funcionais
  // Ele recebe dois parâmetros: uma função e uma lista de dependências
  // Todo useEffect é executado após a renderização de tela uma primeira vez


  // useEffect(() => {  }, []);
  

  useEffect(() => {
    console.log("useEffect");
    notifyApi();
  }, [list]);

  // caso a lista de dependências esteja vazia o useEffect será executado mas o if irá impedir que a função seja executada
  useEffect(() => {
    if(list !== []) {
      notifyApi();
    }
  }, [list]);

  // caso a lista de dependências esteja vazia o useEffect será executado apenas uma vez, após a renderização de tela
  useEffect(() => {
      notifyApi();
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/rodrigorgtic")
    .then((response) => response.json())
    .then((data) => setList(data));
  }, []);


  // sem o useEffect
  function addToListWithoutUseEffect() {
    // setList([...list, "item"]);
    setList((state) => [...state, "new item"]);

    // não irá refletir no console.log a mudança feita no estado
    console.log(list);
    notifyApi();
  }
  
  // sem o useEffect
  function addToListUseEffect() {
    setList((state) => [...state, "new item"]);
  }


  return (
    <div className="App">
      <input 
        type="button"
        onChange={e => setList(e.target.value)}
        value={filter}
      />
      <ul>
        {list.map((item) =>  <li>{item}</li>)}
      </ul>
    </div>
  );
}

