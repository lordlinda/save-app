import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions/index.js'
class Stepfive extends React.Component{
	componentDidMount(){
     this.props.getPlans()
	}
	render(){
    //console.log(this.props.charges)
	return(
		<div className="row">
		{
			this.props.charges.map(charge=>{
				return <div className="col s12 m6 l4" key={charge._id}>
			    <div className="card">
			        <div className="card-content">
			          <span className="card-title">{charge.details.goal}</span>
			          <p>{charge.details.duration}</p>
			        </div>
			        <div className="card-action">
                        {charge.details.amount}
			        </div>
			      </div>
			    </div>
			})
		}
		
		</div>
		
		)
  }  
}

function mapStateToProps(state){
	return {
		charges:state.pay.charges
	}
}
export default connect(mapStateToProps,actions)(Stepfive)
