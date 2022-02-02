import React, { useContext } from 'react';
import { HistoryContext } from '../../index.js';


export default function HistoryResults() {
  const history = useContext(HistoryContext);
  return(
    <>
      <h3>Search History</h3>
      {/*We don't want to leave the page blank if there are no search results yet*/}
      {history.length < 1 && <div>No Search History</div>}
      <div>{history.map(result => (<p>{result}</p>))}</div>
    </>
  )
}
