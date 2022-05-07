import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import DashboardVacc from './pages/DashboardVacc'
import DashboardHealth from './pages/DashboardHealth'
import DashboardCovid from './pages/DashboardCovid'


function App() {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/signup" exact element={<Signup/>}/>
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/dashboard/vaccine" exact element={<DashboardHealth/>} />
          <Route path="/dashboard/health" exact element={<DashboardVacc/>} />
          <Route path="/dashboard/covid" exact element={<DashboardCovid/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
