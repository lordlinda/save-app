import React from 'react'
import { useForm ,Controller} from "react-hook-form";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'


const Stepfour=(props)=>{
	const {handleSubmit,control} = useForm();
     const onSubmit = data => {
     	//console.log(data)
     	props.handleNext()
      props.stepfour(data)
     }
	return(
		<div className='box'>
		<div className='question'>
		<h3>How long are you gonna save?</h3>
		<form onSubmit={handleSubmit(onSubmit)}>
         <Controller
            control={control}
            defaultValue={props.duration}
           rules={{ required: true }}
              as={
                <RadioGroup>
                  <FormControlLabel
                    value="3 months"
                    name='3 months'
                    control={<Radio />}
                    label="3 months"
                  />
                  <FormControlLabel
                    value="6 months"
                    name='6 months'
                    control={<Radio />}
                    label="6 months"
                  />
                  <FormControlLabel
                    value="9 months"
                    name='9 months'
                    control={<Radio />}
                    label="9 months"
                  />
                  <FormControlLabel
                    value="11 months"
                    name='11 months'
                    control={<Radio />}
                    label="11 months"
                  />
                  <FormControlLabel
                    value="other"
                    name='other'
                    control={<Radio />}
                    label="other"
                  />
                </RadioGroup>
              }
              name="duration"
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
    duration:state.pay.duration
  }
}
export default connect(mapStateToProps,actions)(Stepfour)
