import {combineReducers} from 'redux'
import paymentReducer from './pay.js'
//this is called our root REducer beacuse it combines all our reducers
const rootReducer=combineReducers({
  pay:paymentReducer,
})

export default rootReducer