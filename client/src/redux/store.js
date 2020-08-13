//store is our common state,
//this is where we combine all our state
import {createStore,applyMiddleware} from 'redux'
//it consists of three things
//the root reducer,the state object and apply midddleware
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index.js'

const store=createStore(rootReducer,{},applyMiddleware(reduxThunk))

export default store