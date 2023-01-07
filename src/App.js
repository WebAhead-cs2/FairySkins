import Home from './homePage/componentHome';
import Signup from './signupPage/componentSignup';
import Login from './loginPage/componentLogin';
import History from './history/History';
import ComponentCart from './cart/componentCart';
import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import data from '/home/mohammad/proj_3/FairySkins/src/data.js'
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
        headers: { 'Content-Type': 'application/json' },
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
    const {productItems}= data ;
  return (
    <Router>
    <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/signup" element={<Signup/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/cart" element={<ComponentCart/>}/>
    <Route exact path="/history" element={<History/>}/>
    </Routes>
    </Router>
  );
}

export default App;
