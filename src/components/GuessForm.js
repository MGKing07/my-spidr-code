import { useState } from "react";
import "../styles/GuessForm.css"

function GuessForm() {
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

  return (
    <form>
        <div className="FormSec">
            <label><strong>Enter First Name:</strong></label>
            <input className='TypingIn' onChange={firstNChange} 
            value={firstN} type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Last Name:</strong></label>
            <input className='TypingIn' onChange={lastNChange} 
            value={lastN} type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Phone #:</strong></label>
            <input className='TypingIn' onChange={phoneNChange} 
            value={phoneN} type='tel'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Email:</strong></label>
            <input className='TypingIn' onChange={emailChange} 
            value={email} type='email'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Price Guess:</strong></label>
            <input className='TypingIn' onChange={priceGChange} 
            value={priceG} type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Spidr PIN:</strong></label>
            <input className='TypingIn' onChange={pinChange} 
            value={spidrPIN} type='text'/>
        </div>
    </form>
  )
}

export default GuessForm