import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dash-container">

      <div className="column left" style={{backgroundColor: "white"}}>
        <div className="dash-tabs">Dashboard</div>
        <div className="dash-tabs">Vaccination History</div>
        <div className="dash-tabs">Vaccination Due</div>
        <div className="dash-tabs">COVID-19 Resources</div>
      </div>

      <div className="column middle" style={{backgroundColor:"#bbb"}}>
        <h2>Column 2</h2>
        
      </div>

      <div className="column right" style={{backgroundColor:"#ccc"}}>
        <div>
          <img></img>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard