import { createContext, useContext } from "react";

const CyclesContext = createContext({});


function ComponentA() {
  const { activeCycle } = useContext(CyclesContext);
  return <div>{activeCycle}</div>;
}


function ComponentB() {
  const { activeCycle } = useContext(CyclesContext);
  return <div>{activeCycle}</div>;
}

function ComponentC() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext);
  return (
    <div>
      {activeCycle}
      <button onClick={() => setActiveCycle(activeCycle + 1)}>+</button>
    </div>
  )
}


export default function App() {
  
  const [activeCycle, setActiveCycle] = useState(5);

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </CyclesContext.Provider>
  );
}