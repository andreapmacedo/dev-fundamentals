import './App.css'
import { ButtonCss } from './components/buttons/ButtonCss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      
      {/* Usando o ButtonCss com a cor padrão (que é 'primary') */}
      <ButtonCss />
      
      {/* Usando o ButtonCss com diferentes cores */}
      <ButtonCss color="secondary" />
      <ButtonCss color="danger" />
      <ButtonCss color="success" />
      <ButtonCss color="warning" />
    </div>
  )
}

export default App