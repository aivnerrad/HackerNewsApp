import React from 'react';
import SearchBar from '../../components/SearchBar';
import { NavLink } from 'react-router-dom';
export default function SearchPage() {
  return(
    <>
      <h1>Search Page</h1>
      <NavLink to={"/"}>Return Home</NavLink>
      <br />
      <NavLink to={'/history'}>Search History</NavLink>
      <SearchBar />
    </>
  )
}
