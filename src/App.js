import React from 'react';
import Home from './components/Home';
import Signup from './components/Signup';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
              <h1>The Librarian</h1>
              <Switch>
                <Route component={Home} exact path="/" />
                <Route component={Signup} exact path="/signup"/>
              </Switch>
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
