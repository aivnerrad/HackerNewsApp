import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import SearchPage from "./pages/SearchPage";
import HistoryPage from "./pages/HistoryPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<HomePage />}>
        </Route>
        <Route path="/search" exact={true} element={<SearchPage />}>
        </Route>
        <Route path="/history" exact={true} element={<HistoryPage />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
