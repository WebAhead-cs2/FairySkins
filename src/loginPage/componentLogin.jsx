import { useState, onFormSwitch } from "react";
import Signup from "../signupPage/componentSignup";
import './login.css'
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
function  Login ()  {
    const [email, setEmail]= useState('');
    const [password, setPass]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
                  <section>
    <Navbar/>
    </section>
        <form className="signupForm" onSubmit={handleSubmit}>
            <h1> Hi, Welcome Back!</h1>
            <br/>
            <label className="user" for="email">Email*</label>
            <br/>
            <input  className="word" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" id="word"  />
            <br/>
            <br/>
            <label className="user" for="password">Password*</label>
            <br/>
            <input className="word" value={password} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="word"  />
            <br/>
            <br/>
            <br/>
            <button className="signup" type="submit">Login</button>
            <br/>
        
        
            <p className="txt" ><Link to="/signup">Don't have an account?</Link></p>
        </form>
        </>
    )
}

export default Login;