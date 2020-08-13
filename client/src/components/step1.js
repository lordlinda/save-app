import React from 'react'
import { useForm } from "react-hook-form";
import {connect} from 'react-redux'

import * as actions from '../redux/actions/index.js'
const Stepone=(props)=>{
	const { register, handleSubmit} = useForm();
     const onSubmit = data => {
     	//console.log(data)
     	props.handleNext()
     	props.stepone(data)
     }
    // console.log(props)
	return(
		<div className='box'>
		<div className='question'>
		<h2>What are you saving for?</h2>
		<form onSubmit={handleSubmit(onSubmit)}>
		<input
		className='input'
		type='text'
		name='goal'
		defaultValue={props.goal}
		 ref={register({ required: true })}
		 />
		 <button className='button-next' type='submit'>Next</button>
		 </form>
		</div>
		</div>
		)
}

function mapStateToProps(state){
  return {
  	goal:state.pay.goal
  }
}
export default connect(mapStateToProps,actions)(Stepone)
