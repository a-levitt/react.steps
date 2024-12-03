import {useState} from "react";

import Button from './Button.jsx'
import StepMessage from './StepMessage.jsx'

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    step > 1 && setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
      step < 3 && setStep((currentStep) => currentStep + 1);
  }

  return (
      <div>
          <button
              className="close"
              onClick={() => setIsOpen((currentState) => !currentState)}
          >&times;
          </button>
          {isOpen && (
              <div className="steps">
                  <div className="numbers">
                      <div className={step >= 1 ? 'active' : ''}>1</div>
                      <div className={step >= 2 ? 'active' : ''}>2</div>
                      <div className={step >= 3 ? 'active' : ''}>3</div>
                  </div>
                  <StepMessage step={step}>
                      {messages[step - 1]}
                  </StepMessage>
                  <div className="buttons">
                     <Button
                         textColor='#fff'
                         bgColor='#7950f2'
                         onClick={handlePrevious}
                     ><span>👈</span>Previous</Button>
                     <Button
                         textColor='#fff'
                         bgColor='#7950f2'
                         onClick={handleNext}
                     >Next<span>👉</span></Button>
                  </div>
              </div>
          )}
      </div>
  )
}

export default Steps
