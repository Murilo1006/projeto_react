import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';

function App() {
  const nome = "Murilo"
  return (
    <div className="App">
      <h1>
        MEU APP REACT
      </h1>
      <HelloWorld />
      <Frase />
      <DigaMeuNome nome="Leo"/>
      <DigaMeuNome nome= {nome} />
      <p>Outro Paragrafo</p>

    </div>
  );
}

export default App;
