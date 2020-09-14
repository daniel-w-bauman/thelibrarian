import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  }

  firstnameChange = (e) => {
    e.preventDefault();
    this.setState({firstname: e.target.value});
  }

  lastnameChange = (e) => {
    e.preventDefault();
    this.setState({lastname: e.target.value});
  }

  emailChange = (e) => {
    e.preventDefault();
    this.setState({email: e.target.value});
  }

  passwordChange = (e) => {
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  signup = (e) => {
    e.preventDefault();
    let clear = false;
    if(this.state.firstname !== '' && this.state.lastname !== '' && this.state.email !== '' && this.state.password !== ''){
      let data = {};
      data['firstname'] = this.state.firstname;
      data['lastname'] = this.state.lastname;
      data['email'] = this.state.email;
      data['password'] = this.state.password;
      axios.post('http://localhost:3001/api/createuser', data).then(function(response){
        console.log(response);
        if(response.data.status === '1'){
          alert(response.data.message);
        } else if(response.data.status === '0'){
          alert(response.data.message);
          clear = true;
        } else {
          alert('error contacting server');
        }
      }, function(err){
        alert(err);
      });
    } else {
      alert("Not all fields are filled.");
    }
    if(clear){
      this.setState({firstname: '', lastname: '', email: '', password: ''});
    }
  }


  render(){
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <h5>Sign up</h5>
          </div>
          <div className="col-sm-6">
            <a href="/">return</a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.signup}>
              <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" onChange={this.firstnameChange} />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" onChange={this.lastnameChange} />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" onChange={this.emailChange} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" onChange={this.passwordChange} />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Signup;
