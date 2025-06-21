import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

import Form from "./pages/Form";
import Upload from "./pages/Upload";
import Search from "./pages/Search";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a data fetch with a timeout
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  if (isLoading) {
    return <Loader />; // Show Loader while data is loading
  }

  return (
    <Router>
      <div className="App min-h-screen bg-linear-gradient backdrop-blur transition-all duration-2000 ">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
