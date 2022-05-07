import React, { useState } from 'react'
import './Dashboard.css'
import './HealthProfile.css'
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

function HealthProfile() {
    const [value, onChange] = useState(new Date());
    const currentUser = useState()
    const navigate = useNavigate()
    function handleQuestions() {
        const data = {
            uid: currentUser.uid,
            q1: document.getElementById("q1").value,
            q2: document.getElementById("q2").value,
            q3: document.getElementById("q3").value,
            q4: document.getElementById("q4").value,
            q5: document.getElementById("q5").value,
            q6: document.getElementById("q6").value,
            q7: document.getElementById("q7").value,
            q8: document.getElementById("q8").value,
            q9: document.getElementById("q9").value,
        }
        fetch("/submit-assessment", data)
    }

    return (
        <div className="dash-container">

            <div className="column left" style={{ backgroundColor: "white" }}>
                <div className="dash-tabs" onClick={() => { navigate("/dashboard") }}><FontAwesomeIcon icon={faChartColumn} className="dash-icon" />Dashboard</div>
                <div className="dash-tabs" onClick={() => { navigate("/dashboard/health") }}><FontAwesomeIcon icon={faFolderOpen} className="dash-icon" />Health Status</div>
                <div className="dash-tabs" onClick={() => { navigate("/dashboard/vaccine") }}><FontAwesomeIcon icon={faHouseMedicalCircleCheck} className="dash-icon" />Vaccination History</div>
                <div className="dash-tabs" onClick={() => { navigate("/dashboard/covid") }}><FontAwesomeIcon icon={faMaskFace} className="dash-icon" />COVID-19 Resources</div>
            </div>

            <div className="column middle">
                <div class="container">
                    <form>
                        <div class="row">
                            <h4>Account</h4>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Full Name" />
                                <div class="input-icon"><i class="fa fa-user"></i></div>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="email" placeholder="Email Adress" />
                                <div class="input-icon"><i class="fa fa-envelope"></i></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-half">
                                <h4>Date of Birth</h4>
                                <div class="input-group">
                                    <div class="col-third">
                                        <input type="text" placeholder="DD" />
                                    </div>
                                    <div class="col-third">
                                        <input type="text" placeholder="MM" />
                                    </div>
                                    <div class="col-third">
                                        <input type="text" placeholder="YYYY" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-half">
                                <h4>Gender</h4>
                                <div class="input-group">
                                    <input id="gender-male" type="radio" name="gender" value="male" />
                                    <label for="gender-male">Male</label>
                                    <input id="gender-female" type="radio" name="gender" value="female" />
                                    <label for="gender-female">Female</label>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div>Answer the below questions to help us assess your health.</div>
                        <br />
                        <div class="row" style={{ padding: "20px" }}>
                            <div>
                                <div class="input-group">
                                    <label htmlFor="">Do you have access to clean and safe drinking water and food?</label>
                                    <input id="q1" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Do you have access to clean and safe drinking water and food?</label>
                                    <input id="q2" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Do you have any pr-existing health conditions or chronic disease?</label>
                                    <input id="q3" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">How healthy do you consider yourself on a scale of 1 to 10?</label>
                                    <input id="q4" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Do you have any hereditary conditions/diseases?</label>
                                    <input id="q5" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Do you have any allergies?</label>
                                    <input id="q6" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Are you addicted to any substances?</label>
                                    <input id="q7" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">Have you ever been declared clinically depressed?</label>
                                    <input id="q8" type="text" placeholder="Enter your answer here" />
                                </div>
                                <div class="input-group input-group-icon">
                                    <label htmlFor="">How much sleep do you get on an average night?</label>
                                    <input id="q9" type="text" placeholder="Enter your answer here" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h4>Terms and Conditions</h4>
                            <div class="input-group">
                                <input id="terms" type="checkbox" />
                                <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
                            </div>
                            <button onClick={handleQuestions} style={{marginTop: "100px", marginLeft: "40px", marginBottom: "100px"}} class="button-30" role="button">Get Started<img className='btn-arrow' src={arrow}></img></button>
                        </div>
                    </form>
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

export default HealthProfile