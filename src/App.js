// import logo from './logo.svg';
import './App.css';
import Esquerda from './components/Esquerdo/ConteudoLateralEsquerda';
import Centro from './components/Centro/ConteudoCentral';
import Direita from './components/Direito/ConteudoLateralDireita.js'
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      <Direita />
    </>
  );
}

export default App;
