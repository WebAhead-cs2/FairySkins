import'./homePageCss.css';
import Navbar from '../components/navbar';
import ItemsList from '../components/itemsList';
import CategoryFilter from "../components/categoryFilter";
import PriceFilter from "../components/priceFilter";
import React from "react";
import { Navigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
function Home()

{  
    const {state} = useLocation();
    console.log(state);
    const [catFilter, setCatFilter] = React.useState("all");
    const [priceFilter, setPriceFilter] = React.useState([10,100]);
    return(
    <main>
  
    {CorrectNavbar(state)}
    <section className="filters">
        <h1>m</h1>
        <form>
        <PriceFilter
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <CategoryFilter catFilter={catFilter} setCatFilter={setCatFilter} />
        </form>
      </section>

    <section className="listProducts">
    <ItemsList catFilter={catFilter} priceFilter={priceFilter}/>
    </section>
    </main>
   
)
}
export function CorrectNavbar(state)
{
  if(state!=null)
  {
    const { email } = state; 
  console.log(email);
  return(<Navbar email={email}/>)
}
  else
  return(<Navbar email={null}/>)
}


export default Home;

