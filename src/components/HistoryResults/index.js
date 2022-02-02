import React, { useContext } from 'react';
import { HistoryContext } from '../../index.js';


export default function HistoryResults() {
  const history = useContext(HistoryContext);
  return(
    <>
      <h3>Search History</h3>
      {history.length < 1 && <div>No Search History</div>}
      <div>{history.map(result => (<p>{result}</p>))}</div>
    </>
  )
}
