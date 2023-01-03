import'./styleHistory.css';
import Navbar from '../components/navbar';
import React from "react";
import HistoryList from '../components/historyList';

function History()
{

    return(
    <main>
    <section>
    <Navbar/>
    </section>

    <section className="listHistoryProducts">
    <HistoryList />
    </section>
    </main>
   
)
}
export default History;

