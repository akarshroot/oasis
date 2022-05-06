import React from 'react'
import './Dashboard.css'
import userimg from '../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedicalCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouseCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faMaskFace } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="dash-container">

      <div className="column left" style={{backgroundColor: "white"}}>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faChartColumn } className="dash-icon"/>Dashboard</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faFolderOpen } className="dash-icon"/>Health Status</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faHouseMedicalCircleCheck } className="dash-icon"/>Vaccination History</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faHouseCircleExclamation } className="dash-icon"/>Vaccination Due</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faMaskFace } className="dash-icon"/>COVID-19 Resources</div>
      </div>

      <div className="column middle" style={{backgroundColor:"#bbb"}}>
        <h2>Column 2</h2>
        
      </div>

      <div className="column right" style={{backgroundColor:"#ccc"}}>
        <div>
        <img src={userimg} alt="User image" className="user-img"></img> 
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Dashboard