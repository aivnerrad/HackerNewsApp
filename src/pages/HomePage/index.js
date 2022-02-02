import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css"
export default function HomePage() {
  return(
    <>
      <h1>Landing Page</h1>
      <div id="rts-logo" style={{"backgroundImage" : "url(/logo.png)"}}></div>
      <NavLink to={"/search"}>Search</NavLink>
      <br />
      <NavLink to={"/history"}>History</NavLink>
    </>
  )
}
