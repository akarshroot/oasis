import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dash-container">

<div className="column left" style={{backgroundColor: "#aaa"}}>
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>
  <div className="column middle" style={{backgroundColor:"#bbb"}}>
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>
  <div className="column right" style={{backgroundColor:"#ccc"}}>
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>

    </div>
  )
}

export default Dashboard