import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom"
import {compose} from 'redux'


import * as actions from '../redux/actions/index.js'

const Summary=(props)=>{
	const onToken = (token) => {
    props.makePayment(token,props.detail)
    //console.log(props)
    props.history.push('/plans')
  }
  //console.log(props)
	return(
		<div>
		  <h1 className='heading'>{props.detail.goal}</h1>
		   <p className='detail'>Frequency:{props.detail.frequency}</p>
		   <p className='detail'>Amount:{props.detail.amount}</p>
		   <p className='detail'>Amount:{props.detail.duration}</p>
		   <StripeCheckout
        token={onToken}
        stripeKey={process.env.REACT_APP_KEY}
      >
      <button className='button'>Add debit card</button>
      </StripeCheckout>
		</div>
		)
}
function mapStateToProps(state){
  return{
    detail:state.pay
  }
}
export default compose(
withRouter,
connect(mapStateToProps,actions)
)(Summary)
