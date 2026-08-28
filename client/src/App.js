import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Series from './pages/Series';
import Busca from './pages/Busca';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Filmes />} />
          <Route path="/series" element={<Series />} />
          <Route path="/busca" element={<Busca />} />
          <Route path="/detalhes/:tipo/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
