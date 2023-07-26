import React,{useContext, useState} from 'react';
import { FirebaseContext } from '../../store/Context';
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

  const handleLogin = (e) =>{
    e.preventDefault()
    
    firebase.auth().signInWithEmailAndPassword(email, password).then(() =>{
      alert('Logged in ')
      history.push('/')
    }).catch((err) =>{
      alert(err.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="" ></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            value={password}
            onChange={(e) =>{setPassword(e.target.value)}}
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
