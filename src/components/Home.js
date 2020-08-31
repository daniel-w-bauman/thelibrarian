import React from 'react';
import Login from './Login';


class Home extends React.Component {
  render() {
    return (
      <div>        
        <Login />
        <br />
        <a href="/signup">Don't have an account? Sign up!</a>
      </div>
    );
  }
}


export default Home;
