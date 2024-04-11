import logo from './logo.svg';
import './App.css';
import ConteudoLateralEsquerda from './ConteudoLateralEsquerda';

function App() {
  return (
    <>
      <ConteudoLateralEsquerda/>
      <div className='conteudoCentral'>
        {/* Logo do instagram
        Menu de navegação */}
      </div>
      <div className='conteudoLateralDireita'>
        {/* 
        Login
        Sugestões de amigos
        Sugestões de contas 
        */}

      </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
