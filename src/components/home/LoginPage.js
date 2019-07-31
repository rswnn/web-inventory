import React, {Component, Fragment} from 'react'
import { Route } from 'react-router-dom'

import axios from 'axios'
import HomePage from './HomePage';
class LoginPage extends Component{

    constuctor() {
        this.handleNavigate = this.handleNavigate.bind(this);
      }

    state={
        username: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            username: event.target.value,
            password: event.target.value
        });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          username: this.state.name,
          password: this.state.password
        };
    
        axios.post(`http://127.0.0.1:3000/login`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

      handleNavigate() {
        this.props.history.push('homepage');
      }

 render(){
   return (
       <Fragment>
           <form onSubmit={this.handleSubmit}>
           <div class="form-group">
    <label style={{fontSize: 50}} for="exampleInputEmail1">Sistem Informasi Inventori</label>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={this.handleChange}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={this.handleNavigate}>Submit</button>
</form>

      <Route path="/homepage" component={HomePage} />
       </Fragment>
   )
 } 
}
export default LoginPage;