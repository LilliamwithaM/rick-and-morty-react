
import './App.css';
import {useState} from "react"; 
import Characters from './components/Characters';
import Footer from './components/Fooder';
import imageCredencial from './img/credencial.png';


function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
  const api = await fetch("https://rickandmortyapi.com/api/character")
  const characterApi = await api.json();
  console.log(characterApi);
  setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <button onClick={reqApi} className="btn-search">Buscar personaje</button>
          </>
        )}
      </header>
      <Footer />
      <img src={imageCredencial} alt="Credencial" className="img-fooder"></img>
    </div>
  );
}

export default App;
