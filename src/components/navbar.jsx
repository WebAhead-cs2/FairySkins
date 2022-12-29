import './styleNavbar.css';
function Navbar()
{
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
      <a href="" className="MenuItem">Products</a>
      <a href="" className="MenuItem">My Profile</a> 
      <a href="" className="MenuItem">History</a>
     </div>
     <div className="Right">
      
        <img className='signupimage' src='https://cdn-icons-png.flaticon.com/128/748/748137.png'></img>
       <button className="userb">Signup</button>
      
       <img className='loginimage' src='https://cdn-icons-png.flaticon.com/128/3596/3596092.png'></img>
       <button className="userb">Login</button>
     </div>
    </div>
    </div>
    </div>
    </div>
  )
}
export default Navbar;