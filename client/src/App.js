import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Homepage from './components/Homepage.js'
import Question from './components/Question.js'
import Stepfive from './components/step5.js'
function App() {
  return (
    <Provider store={store}>
    <Router>
    <Switch>
    <Route exact path='/home' component={Homepage}/>
    <Route exact path='/questions' component={Question}/>
    <Route exact path='/plans' component={Stepfive}/>
    </Switch>
    </Router>
    </Provider>
  );
}

export default App;
