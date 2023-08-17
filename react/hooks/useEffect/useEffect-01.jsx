import { useEffect, useState } from "react";


function notifyApi() {
  console.log("notifyApi");
}

export function App() {
  const [list, setList] = useState([]);


  // O useEffect é um hook que permite executar efeitos colaterais em componentes funcionais
  // Ele recebe dois parâmetros: uma função e uma lista de dependências
  

  // useEffect(() => {  }, []);
  

  useEffect(() => {
    console.log("useEffect");
    notifyApi();
  }, [list]);


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
      <ul>
        {list.map((item) =>  <li>{item}</li>)}
      </ul>
    </div>
  );
}

