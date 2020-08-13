import React from 'react'
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'


const Stepthree=(props)=>{
	const { register, handleSubmit} = useForm();
     const onSubmit = data => {
     	//console.log(data)
     	props.handleNext()
     	props.stepthree(data)
     }
	return(
		<div className='box'>
		<div className='question'>
		<h3>How much would you like to save?</h3>
		<form onSubmit={handleSubmit(onSubmit)}>
		<input
		className='input'
		type='number'
		name='amount'
		defaultValue={props.amount}
		 ref={register({ required: true })}
		 />
		 <button className='button-next' type='submit'>Next</button>
		 </form>
		 <button className='button-prev'  onClick={props.handleBack}>Prev</button>
		</div>
		</div>
		)
}
function mapStateToProps(state){
  return {
    amount:state.pay.amount
  }
}
export default connect(mapStateToProps,actions)(Stepthree)
