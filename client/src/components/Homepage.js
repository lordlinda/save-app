import React from 'react'

const Homepage=(props)=>{
//console.log(props)
	return(
    <div>
		<div className='plans'>

		<h1 className='heading'>Hello</h1>
			<div className="row">
    <div className="col s12 m6 l4">
    <div className="card">
        <div className="card-content">
          <span className="card-title">Normal savings</span>
        </div>
        <div className="card-action">
          <a className="button btn" href="/questions">button</a>

        </div>
      </div>
    </div>
    <div className="col s12 m6 l4">
    <div className="card">
        <div className="card-content">
          <span className="card-title">Emergency fund</span>
        </div>
        <div className="card-action">
          <a className="button btn" href="/questions">button</a>

        </div>
      </div>
    </div>
    <div className="col s12 m6 l4">
    <div className="card">
        <div className="card-content">
          <span className="card-title">Runway savings</span>
        </div>
        <div className="card-action">
          <a className="button btn" href="/questions">button</a>

        </div>
      </div>
    </div>
  </div>
		</div>
    </div>


		)
}



export default Homepage
