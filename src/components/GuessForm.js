import "../styles/GuessForm.css"

function GuessForm({onSubmit, firstF, lastF, 
    phoneF, emailF, priceF, pinF, 
    firstV, lastV, phoneV, emailV, priceV, pinV}) {

  return (
    <form onSubmit={onSubmit}>
        <div className="FormSec">
            <label><strong>Enter First Name:</strong></label>
            <input required className='TypingIn' onChange={firstF} 
            value={firstV} type='text' placeholder='Jane'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Last Name:</strong></label>
            <input required className='TypingIn' onChange={lastF} 
            value={lastV} type='text' placeholder='Doe'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Phone #:</strong></label>
            <input required className='TypingIn' onChange={phoneF} 
            value={phoneV} type='tel' placeholder='###-###-####'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Email:</strong></label>
            <input required className='TypingIn' onChange={emailF} 
            value={emailV} type='email' placeholder='user@email.com'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Price Guess:</strong></label>
            <input required className='TypingIn' onChange={priceF} 
            value={priceV} type='text' placeholder='##.##'/>
        </div>
        <div className="FormSec">
            <label><strong>Enter Spidr PIN:</strong></label>
            <input required className='TypingIn' onChange={pinF} 
            value={pinV} type='text' placeholder='####-####-####-####'/>
        </div>
        <input className='SubmitBtn' type='submit' value="Submit"/>
    </form>
  )
}

export default GuessForm