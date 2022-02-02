import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { HistoryContext } from '../../index.js';


export default function HistoryResults() {
  const history = useContext(HistoryContext);
  const showHistory = () =>{
    console.log({history})
  }
  return(
    <>
      <NavLink to={"/"}>Return Home</NavLink>
      
      <button onClick={showHistory()}>Show History</button>
      <div>{history.map(result => (<li>{result}</li>))}</div>
    </>
  )
}
