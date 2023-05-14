import {Link} from "react-router-dom"
import './login.css'

export default function Login({onCheckLogin}){
  
  function handleLogin(event){
    event.preventDefault();
    const form=event.target;
    const email=form.querySelector(".email").value;
    const password=form.querySelector(".password").value;
    const user1=JSON.parse(localStorage.getItem("user1"));
    
    if(user1.Email===email && user1.Password===password)onCheckLogin(true);
    else onCheckLogin(false);
    console.log("clicked");
  }
  
  return (
    <div className="login" onSubmit={handleLogin}>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput email" type="text" placeholder="Enter your email..." />
        <label>Password</label>
        <input className="loginInput password" type="password" placeholder="Enter your password..." />
        <button className="loginButton" type="submit">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  );
}
