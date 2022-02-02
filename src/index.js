import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const HistoryContext = createContext()
const searchHistory = [];
ReactDOM.render(
  <React.StrictMode>
    <HistoryContext.Provider value={searchHistory}>
      <App />
    </HistoryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
