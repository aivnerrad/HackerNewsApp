import React, { useContext, useState } from 'react';
import { HistoryContext } from '../../index.js';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import "./index.css"

const searchClient = algoliasearch(
  'DMMG9VA2W1',
  '5010fd4296e9596b7dbd2407ce971a2d'
);

export default function SearchBar(){
  /* We use the HistoryContext to save our search terms */
  const history = useContext(HistoryContext);
  /*We use the useState hook to control error and result output displays*/
  const [error, setError] = useState("");
  const [hits, setHits] = useState([]);

  const searchFunction = async(searchInput) => {
    const results = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchInput}`)
    const reponseData = await results.json()
    /*Pull the search hits from the reponseData and use setState to update the current search hits */
    setHits(reponseData.hits)
  }
  return(
    <>
  <InstantSearch
  indexName="instant_search"
  searchClient={searchClient}
  >
    <SearchBox
    searchAsYouType={false}
    onSubmit={(event) => {
      event.preventDefault()
      let searchInput = event.currentTarget[0].value;
      /* This if/else displays a message on blank input search*/
      if(searchInput.length < 1){
        setError("Please Input A Search Term")
      }else{
        setError("")
        history.push(searchInput)
        searchFunction(searchInput)
      }
    }}
    />
  </InstantSearch>
  {/* List the errors, if any */}
  <div>{error && <li>{error}</li>}</div>
  <div className='search-result-container'>
    {/*Iterate over the hits and create a div for each one, filling each with the information from each hit */}
    {hits.map((hit) =>
    <div className='search-result'>
      <a href={hit.url}>{hit.title} <span id="story-url">({hit.url})</span>
      <div className='story-info'>
        <p>{hit.author}</p>
        <p>{hit.points}</p>
        <p>{hit.num_comments}</p>
        {/*Format the date to something humans can easily read */}
        <p>{new Date(hit.created_at).toLocaleString('en-US')}</p>
      </div>
      </a>
    </div>
    )}
  </div>
  </>

  )
};
