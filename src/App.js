import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import Year from './components/Year';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body/>
      {/* <Year /> */}
      <Footer />
      
    </div>
  );
}

export default App;
