import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const HistoryContext = createContext()
//HistoryContext will allow me to save search terms and then display them on the Search History Page
const searchHistory = [];
ReactDOM.render(
  <React.StrictMode>
    <HistoryContext.Provider value={searchHistory}>
      <App />
    </HistoryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
