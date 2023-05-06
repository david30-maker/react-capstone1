import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Home/HomeContainer';
import DetailPage from './Components/Details/DetailsContainer';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
