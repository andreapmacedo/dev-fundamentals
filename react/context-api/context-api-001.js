import { createContext, useContext } from "react";

const CyclesContext = createContext({
  activeCycle: 5, // default value
});


function ComponentA() {
  const { activeCycle } = useContext(CyclesContext);
  return <div>{activeCycle}</div>;
}


function ComponentB() {
  const { activeCycle } = useContext(CyclesContext);
  return <div>{activeCycle}</div>;
}


export default function App() {
  return (
    <CyclesContext.Provider value={{ activeCycle: 10 }}> 
      <ComponentA />
      <ComponentB />
    </CyclesContext.Provider>
  );
}