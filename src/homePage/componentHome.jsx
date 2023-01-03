import'./homePageCss.css';
import Navbar from '../components/navbar';
import ItemsList from '../components/itemsList';
import CategoryFilter from "../components/categoryFilter";
import PriceFilter from "../components/priceFilter";
import React from "react";
function Home()
{
    const [catFilter, setCatFilter] = React.useState("all");
    const [priceFilter, setPriceFilter] = React.useState([10,100]);
    return(
    <main>
    <section>
    <Navbar/>
    </section>


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
export default Home;

