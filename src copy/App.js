// import logo from './logo.svg';
import './App.css';
import Esquerda from './components/Esquerdo/ConteudoLateralEsquerda';
import Centro from './components/Centro/ConteudoCentral';
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
