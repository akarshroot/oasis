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
import { useNavigate } from 'react-router-dom';

function DashboardHealth() {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate()

  return (
    <div className="dash-container">

      <div className="column left" style={{backgroundColor: "white"}}>
      <div className="dash-tabs" onClick={() => {navigate("/dashboard")}}><FontAwesomeIcon icon={ faChartColumn } className="dash-icon"/>Dashboard</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/health")}}><FontAwesomeIcon icon={ faFolderOpen } className="dash-icon"/>Health Status</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/vaccine")}}><FontAwesomeIcon icon={ faHouseMedicalCircleCheck } className="dash-icon"/>Vaccination History</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/covid")}}><FontAwesomeIcon icon={ faMaskFace } className="dash-icon"/>COVID-19 Resources</div>
      </div>

      <div className="column middle">
      <table>
		<thead>
			<tr>
				<th>S. No.</th>
				<th>Vaccine</th>
				<th>Next Appointment</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>COVID</td>
				<td>10-May-22</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Hepatitis A</td>
				<td>05-Jun-22</td>
			</tr>
			<tr>
				<td>3</td>
				<td>Hepatitis B</td>
				<td>10-Jun-22</td>
			</tr>
			<tr>
				<td>4</td>
				<td>IPV</td>
				<td>20-Jun-22</td>
			</tr>
			<tr>
				<td>5</td>
				<td>MMR</td>
				<td>30-Jun-22</td>
			</tr>
		</tbody>
	</table>
    <button class="button-30 btn" role="button">Update appointments</button>
      </div>

      <div className="column right" style={{backgroundColor:"white"}}>
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

export default DashboardHealth