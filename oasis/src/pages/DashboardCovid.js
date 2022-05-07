import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom';

function DashboardCovid() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate()

  return (
    <div className="dash-container">

      <div className="column left" style={{ backgroundColor: "white" }}>
        <div className="dash-tabs" onClick={() => { navigate("/dashboard") }}><FontAwesomeIcon icon={faChartColumn} className="dash-icon" />Dashboard</div>
        <div className="dash-tabs" onClick={() => { navigate("/dashboard/health") }}><FontAwesomeIcon icon={faFolderOpen} className="dash-icon" />Health Status</div>
        <div className="dash-tabs" onClick={() => { navigate("/dashboard/vaccine") }}><FontAwesomeIcon icon={faHouseMedicalCircleCheck} className="dash-icon" />Vaccination History</div>
        <div className="dash-tabs" onClick={() => { navigate("/dashboard/covid") }}><FontAwesomeIcon icon={faMaskFace} className="dash-icon" />COVID-19 Resources</div>
      </div>

      <div className="column middle">
        <iframe src="" frameborder="0"></iframe>
        <div className='covid-cards'>
            <div className='covid-cert'>
                <h3>Get your vaccination certificate</h3>
                
            </div>
        </div>
      </div>

      <div className="column right" style={{ backgroundColor: "white" }}>
        <div>
          <img src={userimg} alt="User image" className="user-img"></img>
          <h3>Test User 1</h3>
        </div>
        <div>
          <Calendar className="cal" onChange={onChange} value={value} />
        </div>
      </div>

    </div>
  )
}

export default DashboardCovid