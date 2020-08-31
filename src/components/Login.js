import React from 'react';

class Login extends React.Component {
  render(){
    return (
      <div>
        <h5>Login</h5>
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
};

export default Login;
