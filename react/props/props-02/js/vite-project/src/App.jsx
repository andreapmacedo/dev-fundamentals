import {Component01} from './Component01'
import {Component02} from './Component02'
import {Component03} from './Component03'
import {Component04} from './Component04'
import {Component05} from './Component05'
import {Component06} from './Component06'
import './App.css'

function App() {
  return (
    <>
      {/* <Component01 />
      <Component02 />
      <Component02 text="componente02 prop"/>
      <Component03 text="componente03 props destrutcturing"/> */}
      {/* <Component04 text="componente04 text" sub="componente04 sub"/> */}
      
      {/* <Component05>componente05 children</Component05> */}
      <Component06 text="componente06 prop text" sub="componente06 prop sub">componente06 children</Component06>

    </>
  )
}

export default App
