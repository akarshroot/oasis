import React, { useState }  from 'react'
import './Dashboard.css'
import 'react-calendar/dist/Calendar.css';

import dashpic from '../assets/dashPic.png'
import vacimg from '../assets/vacimg.png'
import userimg from '../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedicalCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouseCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faMaskFace } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';


import arrow from '../assets/arrow.png'

function Dashboard() {
  function isSameDay(a, b) {
    console.log(a);
    console.log(b);
    return a == b
  }
  const [value, onChange] = useState(new Date());
  const datesToAddContentTo = [1, 12, 20];
  function tileContent({ date, view }) {
    // Add class to tiles in month view only
    if (view === 'month') {
      console.log();
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddContentTo.find(dDate => isSameDay(dDate, date))) {
        return 'My content';
      }
    }
  }

  return (
    <div className="dash-container">

      <div className="column left" style={{backgroundColor: "white"}}>
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
        <button class="button-30" role="button">Log your mood<img className = 'btn-arrow' src={arrow}></img></button>
        <div className = 'parFlex'>
          <div className = 'nearby'>
            Locate a nearby health center
          </div>
          <div className = 'heaStat'>
            Check your health status
          </div>
        </div>
      
      </div>

      <div className="column right" style={{backgroundColor:"white"}}>
        <div className="image-div">
          <img src={userimg} alt="User image" className="user-img"></img> 
        </div>
        <div>
          <Calendar onChange={onChange} value={value} tileContent={tileContent} className="cal"/>
        </div>
      </div>

    </div>
  )
}

export default Dashboard