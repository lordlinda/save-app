//this is the payment reducer
const initialState={
	goal:'',
	frequency:'',
	amount:'',
	duration:'',
	charges:[]
}


export default(state=initialState,action)=>{
	switch(action.type){
		case 'stepone':
		return {
			...state,
			goal:action.payload.goal
		}
		case 'steptwo':
		return {
			...state,
			frequency:action.payload.frequency
		}
		case 'stepthree':
		return {
			...state,
			amount:action.payload.amount
		}
		case 'stepfour':
		return {
			...state,
			duration:action.payload.duration
		}
		case 'plans':
		return {
			...state,
			charges:action.payload
		}
		default:
		return state
	}
}