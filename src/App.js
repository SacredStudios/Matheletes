import logo from './logo.svg';
import './App.css';
import MathHandler from './components/MathHandler';

function App() {
  return (
    <div className="App">  
    
    <div className = "title_">Matheletes</div>  
      <header className="App-header">     
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         <MathHandler/>
      
        </p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
