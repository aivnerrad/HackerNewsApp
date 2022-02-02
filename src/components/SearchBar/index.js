import React, { useContext, useState } from 'react';
import { HistoryContext } from '../../index.js';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'DMMG9VA2W1',
  '5010fd4296e9596b7dbd2407ce971a2d'
);

export default function SearchBar(){
  const history = useContext(HistoryContext);
  const [error, setError] = useState("");

  const searchFunction = (searchInput) => {
    
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
        let searchInput = event.currentTarget[0].value
        if(searchInput.length < 1){
          setError("Please Input A Search Term")
        }else{
          setError("")
          history.push(searchInput)
        }
      }}
    />
  </InstantSearch>
  <div>{error && <li>{error}</li>}</div>
  </>

  )
};
