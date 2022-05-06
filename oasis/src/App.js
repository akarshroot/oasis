import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import Home from './pages/Home'


function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      if (true) {
        setLoading(!isLoading);
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
