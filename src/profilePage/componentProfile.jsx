import { useState } from "react";
import Login from "../loginPage/componentLogin";
import './styleProfile.css'
import Navbar from '../components/navbar';
import { Link } from 'react-router-dom';
function  Signup  ()  {
    const [username, setUser]= useState('');
    const [email, setEmail]= useState('');
    const [phonenumber, setPhonenum]= useState('');
    const [password, setPass]= useState('');



    return (
        <>
          <section>
    <Navbar/>
    </section>
        <form className="profileForm">
            <h1> Profile</h1>
            <label className="user" for="username">Username</label>
            <br/>
            <input value={username} onChange={(e) => setUser(e.target.value)} type="user" placeholder="enter username" className="word"/>
            <br/>
            <br/>
            <label className="user" for="email">Email</label>
            <br/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email" className="word"/>
            <br/>
            <br/>
            <label className="user" for="phonenumber">Phone Number</label>
            <br/>
            <input value={phonenumber} onChange={(e) => setPhonenum(e.target.value)} type="phonenum" placeholder="" className="word" />
            <br/>
            <br/>
           
            <br/>
            <button type="submit" className="signup">save changes</button>
           
       
        </form>
        </>
    )
};

export default Signup;