import React, { useState } from 'react'
import './Dashboard.css'
import 'react-calendar/dist/Calendar.css';

import dashpic from '../assets/dashPic.png'
import vacimg from '../assets/vacimg.png'
import userimg from '../assets/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { faHouseMedicalCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faHouseCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faMaskFace } from '@fortawesome/free-solid-svg-icons';
import Calendar from 'react-calendar';
import Modal from 'react-modal';
import arrow from '../assets/arrow.png'
<<<<<<< HEAD
import depressed from '../assets/depressed.png'
import dead from '../assets/dead.png'
import happy from '../assets/happy.png'
import excited from '../assets/excited.png'
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 96f61249a079648aaf996e08b03cf78e7ed6afd1

function Dashboard() {
  function isSameDay(a, b) {
    console.log(a);
    console.log(b);
    return a == b
  }

  const [closeModal, setCloseModal] = useState()
  const [modalIsOpen, setModalIsOpen] = useState()

  const [value, onChange] = useState(new Date());
  const navigate = useNavigate()
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

<<<<<<< HEAD
      <div className="column left" style={{ backgroundColor: "white" }}>
        <div className="dash-tabs"><FontAwesomeIcon icon={faChartColumn} className="dash-icon" />Dashboard</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={faFolderOpen} className="dash-icon" />Health Status</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={faHouseMedicalCircleCheck} className="dash-icon" />Vaccination History</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={faHouseCircleExclamation} className="dash-icon" />Vaccination Due</div>
        <div className="dash-tabs"><FontAwesomeIcon icon={faMaskFace} className="dash-icon" />COVID-19 Resources</div>
=======
      <div className="column left" style={{backgroundColor: "white"}}>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard")}}><FontAwesomeIcon icon={ faChartColumn } className="dash-icon"/>Dashboard</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/health")}}><FontAwesomeIcon icon={ faFolderOpen } className="dash-icon"/>Health Status</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/vaccine")}}><FontAwesomeIcon icon={ faHouseMedicalCircleCheck } className="dash-icon"/>Vaccination History</div>
        <div className="dash-tabs" onClick={() => {navigate("/dashboard/covid")}}><FontAwesomeIcon icon={ faMaskFace } className="dash-icon"/>COVID-19 Resources</div>
>>>>>>> 96f61249a079648aaf996e08b03cf78e7ed6afd1
      </div>

      <div className="column middle">
        <div className='dash-wel'>
          <b> Welcome to your dashboard!</b><br />
          <span className='check'>Check out what's new since your last visit.</span>
        </div>
<<<<<<< HEAD
        <div className='feel'>How are you feeling today?</div>
        <button class="button-30" role="button" onClick={() => { setModalIsOpen(true); }} >Log your mood<img className='btn-arrow' src={arrow}></img></button>
        <div className='parFlex'>
          <div className='nearby'>
            Locate a nearby health center
          </div>
          <div className='heaStat'>
            Check your health status
=======
        <div className="outer">
          <div className = 'feel'>How are you feeling today?</div>
          <button class="button-30" role="button">Log your mood<img className = 'btn-arrow' src={arrow}></img></button>
        </div>
        
        <div className = 'parFlex'>
          <div className = 'nearby'>
           <div className = 'textN'><a className='text-link' href = '#'> Locate a nearby health center</a> </div>
          </div>
          <div className = 'heaStat'>
          <div className = 'textN'><a className='text-link' href = '#'> Check your health status</a></div>
>>>>>>> 96f61249a079648aaf996e08b03cf78e7ed6afd1
          </div>
        </div>

      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Mood Modal"
        className="mood-modal"
      >
        <button className='close-modal' onClick={() => { setCloseModal(true); setModalIsOpen(false) }}><FontAwesomeIcon icon={faRectangleXmark} className="dash-icon" /></button>
        <h2>How are you feeling?</h2>
        <div>
          <img onClick={() => {setModalIsOpen(false); setCloseModal(true)}} className='mood-emojis' src={dead} alt="" />
          <img onClick={() => {setModalIsOpen(false); setCloseModal(true)}} className='mood-emojis' src={depressed} alt="" />
          <img onClick={() => {setModalIsOpen(false); setCloseModal(true)}} className='mood-emojis' src={happy} alt="" />
          <img onClick={() => {setModalIsOpen(false); setCloseModal(true)}} className='mood-emojis' src={excited} alt="" />
        </div>
      </Modal>


      <div className="column right" style={{ backgroundColor: "white" }}>
        <div className="image-div">
          <img src={userimg} alt="User image" className="user-img"></img><br />
          <h3>Test User 1</h3>
        </div>
        <div>
          <Calendar onChange={onChange} value={value} tileContent={tileContent} className="cal" />
        </div>
      </div>

    </div>
  )
}

export default Dashboard