import React from 'react'
import './Dashboard.css'
import dashpic from '../assets/dashPic.png'
import vacimg from '../assets/vacimg.png'
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
        <div className="dash-tabs"><img src = {dashpic} className = 'dash-pic dashbpic'></img>Dashboard</div>
        <div className="dash-tabs"><img src = {vacimg} className = 'dash-pic vacimg'></img>Vaccination History</div>
        <div className="dash-tabs">Vaccination Due</div>
        <div className="dash-tabs">COVID-19 Resources</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faChartColumn } className="dash-icon"/>Dashboard</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faFolderOpen } className="dash-icon"/>Health Status</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faHouseMedicalCircleCheck } className="dash-icon"/>Vaccination History</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faHouseCircleExclamation } className="dash-icon"/>Vaccination Due</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={ faMaskFace } className="dash-icon"/>COVID-19 Resources</div>
      </div>

      <div className="column middle">
        <div className = 'dash-wel'>
         <b> Welcome to your dashboard!</b><br/>
         <span className = 'check'>Check out what's new since your last visit.</span> 
        </div>
        <div className = 'feel'>How are you feeling today?</div>
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