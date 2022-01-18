import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./navigation/Navbar";
import Categories from "./components/Categories";
import CoinList from "./components/CoinList";
import Wallet from "./components/Wallet";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/coin_list" element={<CoinList />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>      
    </Router>
  );
}

export default App;
