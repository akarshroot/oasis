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
                            <div class="input-group input-group-icon">
                                <input type="password" placeholder="Password" />
                                <div class="input-icon"><i class="fa fa-key"></i></div>
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
                        <div class="row">
                            <h4>Payment Details</h4>
                            <div class="input-group">
                                <input id="payment-method-card" type="radio" name="payment-method" value="card" checked="true" />
                                <label for="payment-method-card"><span><i class="fa fa-cc-visa"></i>Credit Card</span></label>
                                <input id="payment-method-paypal" type="radio" name="payment-method" value="paypal" />
                                <label for="payment-method-paypal"> <span><i class="fa fa-cc-paypal"></i>Paypal</span></label>
                            </div>
                            <div class="input-group input-group-icon">
                                <input type="text" placeholder="Card Number" />
                                <div class="input-icon"><i class="fa fa-credit-card"></i></div>
                            </div>
                            <div class="col-half">
                                <div class="input-group input-group-icon">
                                    <input type="text" placeholder="Card CVC" />
                                    <div class="input-icon"><i class="fa fa-user"></i></div>
                                </div>
                            </div>
                            <div class="col-half">
                                <div class="input-group">
                                    <select>
                                        <option>01 Jan</option>
                                        <option>02 Jan</option>
                                    </select>
                                    <select>
                                        <option>2015</option>
                                        <option>2016</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <h4>Terms and Conditions</h4>
                            <div class="input-group">
                                <input id="terms" type="checkbox" />
                                <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
                            </div>
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