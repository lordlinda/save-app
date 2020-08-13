import React from 'react'


import Stepone from './step1.js'
import Steptwo from './step2.js'
import Stepthree from './step3.js'
import Stepfour from './step4.js'
import Summary from './Summary.js'


const Question=()=>{
	function getSteps() {
  return ['Step one', 'step two', 'step three','step four'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Stepone handleNext={handleNext}/>;
    case 1:
      return <Steptwo handleNext={handleNext} handleBack={handleBack}/>;
    case 2:
      return <Stepthree handleNext={handleNext} handleBack={handleBack}/>;
      case 3:
      return <Stepfour handleNext={handleNext} handleBack={handleBack}/>
      
    default:
      return 'Unknown stepIndex';
  }
}

	const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

	return(
		<div>
      
        {activeStep === steps.length ? (

          <div className='summary'><Summary/></div>
        ) : (
            <div>{getStepContent(activeStep)}</div>
        )}
    </div>

		)
}

export default Question
