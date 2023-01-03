import Home from './homePage/componentHome';
import Signup from './signupPage/componentSignup';
import Login from './loginPage/componentLogin';
import Profile from './profilePage/componentProfile';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './data.js'
function App() {
//**********from mohammed */********* */
 /* const [backendData, setBackendData] = useState([{}])
    useEffect(()=>{

      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [] )*/
//**********from mohammed */********* */
const [backendData, setBackendData] = useState([{}])
    useEffect(()=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,
        'Accept': 'application/json' },
        body: JSON.stringify({ products: data })
    };
      fetch("/productList",requestOptions).then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
          console.log(data);
        }
      )
    }, [] )
  return (
    <Router>
    <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
    </Router>
  );
}

export default App;
