import './styleNavbar.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import React,{useState} from 'react';
function Navbar()
{
  const cartFromStorage = JSON.parse(localStorage.getItem("cart") || "[]")
  const [cart, setCart] = useState(cartFromStorage);
 
    //  const {state} = useLocation();
    //  const { cart} = state;
  return(
    <div className="Page">
    <div className="Container">
    <div className="Wrapper ">
    <div className="Frame">
     <div className="Left">
      
      <h1 className='logo1' Style="text-align:left;float:left;">.Fairy</h1> 
<h2 className='logo2' Style="text-align:right;float:right;">skins</h2> 

     </div>
     <div className="Center">
     <Link to="/home" className="MenuItem">Products</Link>
     <Link to="/profile" className="MenuItem">My Profile</Link> 
     <Link to="/history" className="MenuItem">History</Link>
     </div>
     <div className="Right">


        <Link to="/cart">
        <button>cart {cart.length}</button>
        </Link>
        <img className='signupimage' src='https://cdn-icons-png.flaticon.com/128/748/748137.png'></img>
        <Link to="/signup">
       <button  className="userb"  variant="contained">Signup</button>
       </Link>
      
       <img className='loginimage' src='https://cdn-icons-png.flaticon.com/128/3596/3596092.png'></img>
       <Link to="/login">
       <button className="userb"  variant="contained">Login</button>
       </Link>
     </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Navbar;