import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Year from './components/Year';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Semister from './components/Semister';
// import Subject from './components/Subject';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      <Footer />


      {/* <Router>
        
        <Routes>
          <Route path="/" element={<Year />} />
          <Route path="semister/*" element={<Semister />}/>
          <Route path="subject/*" element={<Subject />}/>
        </Routes>
        
      </Router> */}
    </div>
  );
}

export default App;