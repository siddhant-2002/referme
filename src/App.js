import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Year from './components/Year';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Subject from './components/Subject';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<><Header/><Body/><Footer/></>} />
          <Route path="Year/*" element={<><Header/><Year/><Footer/></>} />
          <Route path="Subject/*" element={<><Header/><Subject/><Footer/></>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
