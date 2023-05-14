import { useState } from 'react';
import './register.css'
import {Link} from "react-router-dom"

export default function Register(){

  function handleSubmit(event){
    event.preventDefault();
    const form=event.target;
    const uname=form.querySelector(".uname").value;
    const email=form.querySelector(".email").value;
    const password=form.querySelector(".password").value;
    
    const p1={
      "Username":uname,
      "Email":email,
      "Password":password
    }
    localStorage.setItem("user1",JSON.stringify(p1));
  }

  return (
    <div className="register" onSubmit={handleSubmit}>
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput uname" placeholder="Enter your username..." required/>
        <label>Email</label>
        <input type="email" className="registerInput email" placeholder="Enter your email..." required/>
        <label>Password</label>
        <input type="password" className="registerInput password" placeholder="Enter your password..." required/>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">Login</Link>
      </button>
    </div>
  )
}
