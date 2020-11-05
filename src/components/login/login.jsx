import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { withRouter } from "react-router-dom";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null
  })
  const [users, setUsers] = useState([]);
  function fetchUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (users) {
        setUsers(users.data);
      })
      .catch(function (error) {
        console.log("error: ", error);
      });
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const handleChange = (e) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value
    }))
  }
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.email && state.password) {
      let userIndex = users.findIndex(({ email }) => email === state.email);
      if (userIndex !== -1) {
        if (users[userIndex].username === state.password) {          
          redirectToHome(users[userIndex]);
        } else {
          setStatus('Please verify the details..');
        }
      } else {
        setStatus('Please verify the details..');
      }
    } else {
      setStatus('Please enter the details..');
    }
  }
  function setStatus(message){
    setState(prevState => ({
      ...prevState,
      'successMessage': message
    }))
  }
  
  const redirectToHome = (user) => {
    // props.updateTitle('Home')
    localStorage.setItem('user',JSON.stringify(user));
    props.history.push('/home');
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="card col-12 col-lg-6 login-card mt-2 hv-center text-center">
        <form>
          <div className="form-group text-left">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={state.email}
              onChange={handleChange}
            />

          </div>
          <div className="form-group text-left">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmitClick}
          >Submit</button>
        </form>
        <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
          {state.successMessage}
        </div>
      </div>
    </div>
  )
}

export default withRouter(LoginForm);