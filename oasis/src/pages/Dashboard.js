import React from 'react'
import './Dashboard.css'
import dashpic from '../assets/dashPic.png'
import vacimg from '../assets/vacimg.png'

function Dashboard() {
  return (
    <div className="dash-container">

      <div className="column left" style={{backgroundColor: "white"}}>
        <div className="dash-tabs"><img src = {dashpic} className = 'dash-pic dashbpic'></img>Dashboard</div>
        <div className="dash-tabs"><img src = {vacimg} className = 'dash-pic vacimg'></img>Vaccination History</div>
        <div className="dash-tabs">Vaccination Due</div>
        <div className="dash-tabs">COVID-19 Resources</div>
      </div>

      <div className="column middle">
        <div className = 'dash-wel'>
         <b> Welcome to your dashboard!</b><br/>
         <span className = 'check'>Check out what's new since your last visit.</span> 
        </div>
        
      </div>

      <div className="column right" style={{backgroundColor:"#ccc"}}>
        <h2>Column 3</h2>
        <p>Some text..</p>
      </div>

    </div>
  )
}

export default Dashboard