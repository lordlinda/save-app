import React from 'react'
import { useForm ,Controller} from "react-hook-form";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'

const Steptwo=(props)=>{
	const {handleSubmit,control} = useForm();
     const onSubmit = data => {
     	//console.log(data)
     	props.handleNext()
      props.steptwo(data)
     }
	return(
		<div className='box'>
		<div className='question'>
		<h3>How frequently would you like to save?</h3>
		<form onSubmit={handleSubmit(onSubmit)}>
         <Controller
            control={control}
            defaultValue={props.frequency}
           rules={{ required: true }}
              as={
                <RadioGroup>
                  <FormControlLabel
                    value="daily"
                    name='daily'
                    control={<Radio />}
                    label="daily"
                  />
                  <FormControlLabel
                    value="weekly"
                    name='weekly'
                    control={<Radio />}
                    label="weekly"
                  />
                  <FormControlLabel
                    value="monthly"
                    name='monthly'
                    control={<Radio />}
                    label="monthly"
                  />
                </RadioGroup>
              }
              name="frequency"
            />
            <button type='submit' className='button-next'>Next</button>
		 </form>
     <button  onClick={props.handleBack} className='button-prev'>Prev</button>

		</div>
		</div>
		)
}
function mapStateToProps(state){
  return {
    frequency:state.pay.frequency
  }
}
export default connect(mapStateToProps,actions)(Steptwo)
