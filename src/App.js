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
      <Categories />
      <CoinList />
      <Wallet />
    </Router>
  );
}

export default App;
