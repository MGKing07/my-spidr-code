import logo from './logo.svg';
import './App.css';
import GuessForm from './components/GuessForm.js';

function App() {
  return (
    <div className="App">
      <div className='GuessBox'>
        <h1>
          Guess Air Fryer Price<div className="TextL"></div>
        </h1>
        <GuessForm/>
      </div>
    </div>
  );
}

export default App;
