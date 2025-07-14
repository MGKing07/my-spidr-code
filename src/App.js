import GuessForm from './components/GuessForm.js';
import { useState } from "react";
import './App.css';

function App() {

  const [firstN, setFirstN] = useState('');
  const [lastN, setLastN] = useState('');
  const [phoneN, setphoneN] = useState('');
  const [email, setEmail] = useState('');
  const [priceG, setpriceG] = useState('');
  const [spidrPIN, setSpidrPIN] = useState('');

  const firstNChange = (e) => {
      setFirstN(e.target.value);
  }
  const lastNChange = (e) => {
      setLastN(e.target.value);
  }
  const phoneNChange = (e) => {
      setphoneN(e.target.value);
  }
  const emailChange = (e) => {
      setEmail(e.target.value);
  }
  const priceGChange = (e) => {
      setpriceG(e.target.value);
  }
  const pinChange = (e) => {
      setSpidrPIN(e.target.value);
  }

  const submitF = (e) => {
    e.preventDefault();
    console.log(firstN + " " + lastN);
    console.log(phoneN);
    console.log(email);
    console.log(priceG);
    console.log(spidrPIN);
  }
  return (
    <div className="App">
      <div className='GuessBox'>
        <h1>
          Guess Air Fryer Price<div className="TextL"></div>
        </h1>
        <GuessForm onSubmit={submitF} firstF={firstNChange} 
        firstV={firstN} lastF={lastNChange} lastV={lastN} 
        phoneF={phoneNChange} phoneV={phoneN} emailF={emailChange} 
        emailV={email} priceF={priceGChange} priceV={priceG} 
        pinF={pinChange} pinV={spidrPIN}/>
      </div>
    </div>
  );
}

export default App;
