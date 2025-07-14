import React from 'react'
import "../styles/GuessForm.css"

function GuessForm() {
  return (
    <form>
        <div className="FormSec">
            <label><strong>Enter First Name:</strong></label>
            <input className='TypingIn' type='text'/>
        </div>
    </form>
  )
}

export default GuessForm