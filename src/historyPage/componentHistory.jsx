import "./styleHistory.css";
import Navbar from "../components/navbar";
import React from "react";
import HistoryList from "../components/historyList";
import { useLocation } from "react-router-dom";
import { CorrectNavbar } from "../homePage/componentHome";
function History() {
  const location = useLocation();
  const state = location.state;
  return (
    <main>
      <section>{CorrectNavbar(state)}</section>

      <section className="listHistoryProducts">
        <HistoryList />
      </section>
    </main>
  );
}
export default History;
