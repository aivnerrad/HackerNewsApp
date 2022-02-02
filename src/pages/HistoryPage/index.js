import React from 'react';
import HistoryResults from '../../components/HistoryResults';
import { NavLink } from "react-router-dom"
export default function HistoryPage() {
  return(
    <>
      <h1>History Page</h1>
      <div id="rts-logo" style={{"backgroundImage" : "url(/logo.png)"}}></div>
      <NavLink to={"/"}>Return Home</NavLink>
      <br />
      <NavLink to={"/search"}>Return to Search</NavLink>
      <HistoryResults />
    </>
  )
}
