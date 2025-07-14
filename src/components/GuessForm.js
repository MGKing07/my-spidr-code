import React from 'react'
import "../styles/GuessForm.css"

function GuessForm() {
  return (
    <form>
        <div className="FormSec">
            <label><strong>Enter First Name:</strong></label>
            <input className='TypingIn' type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Last Name:</strong></label>
            <input className='TypingIn' type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Phone #:</strong></label>
            <input className='TypingIn' type='tel'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Email:</strong></label>
            <input className='TypingIn' type='email'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Price Guess:</strong></label>
            <input className='TypingIn' type='text'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Spidr PIN:</strong></label>
            <input className='TypingIn' type='text'/>
        </div>
    </form>
  )
}

export default GuessForm