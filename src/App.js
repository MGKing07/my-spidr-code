import GuessForm from './components/GuessForm.js';
import { useState } from "react";
import './App.css';

function App() {

  //All the set states to store all info from field.
  const [firstN, setFirstN] = useState('');
  const [lastN, setLastN] = useState('');
  const [phoneN, setphoneN] = useState('');
  const [email, setEmail] = useState('');
  const [priceG, setpriceG] = useState('');
  const [spidrPIN, setSpidrPIN] = useState('');

  //Functions that changes the value from field.
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
    //Prints when submit button is clicked.
    //Usually the backend handles email validation and pin validation.
    e.preventDefault();
    console.log("Submission Information");
    console.log("Full Name: " + firstN + " " + lastN);
    console.log("Phone Number: " + phoneN);
    console.log("Email Address: " + email);
    //Decided to handle leading zeros here with parseFloat.
    console.log("Price Guess: $" + parseFloat(priceG).toFixed(2));
    console.log("Spidr PIN: " + spidrPIN);
  }
  return (
    <div className="App">
      <div className='GuessBox'>
        <h1>
          Guess Air Fryer Price<div className="TextL"></div>
        </h1>
        {/* Passed all useStates to form. */}
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
