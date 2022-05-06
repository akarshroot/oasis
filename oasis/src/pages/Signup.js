import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import './Login.css'

function Signup() {
    const navigate = useNavigate()
    const currentUser = false
    const initUserLoading = false
    useEffect(() => {
        if (currentUser) {
            window.location.replace("/dashboard")
        }
    }, [])

    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [warnemail, setwarnemail] = useState(false);
    const [warnpass, setwarnpass] = useState(false);
    const [danger, setdanger] = useState(true);

    const [eye, seteye] = useState(true);
    const [pass, setpass] = useState("password");

    function callTest() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'TestUserBeta', phn: "9876543210" })
        };
        // fetch("/post-user", requestOptions)
        //     .then((res) => res.json())
        //     .then((data) => console.log(data.message));

        fetch("/verify-user")
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    const [loading, setLoading] = useState(false)

    function handleSignup() {
        setLoading(true)
        const userData = {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password
        }
        fetch("/post-user", userData)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setLoading(false)
            });
    }

    const inputEvent = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == "email") {
            if (value.length > 0) {
                setdanger(true);
            }
        }
        setinputs((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        setwarnemail(false);
        setwarnpass(false);
        if (inputs.email.length < 1) { setdanger(false); return } if (inputs.email == "") { setwarnemail(true); return } else if (inputs.password == "") { setwarnpass(true); return } else { handleSignup() }
    }; const Eye = () => {
        if (pass == "password") {
            setpass("text");
            seteye(false);
        } else {
            setpass("password");
            seteye(true);
        }
    };


    return (
        <>
            <div className="login-container">
                <div className="card">
                    <div className="form">
                        <div className="right-side">
                            <div className="register">
                                <p>Already a member? <a href='/login'>Login Now</a></p>
                            </div>

                            <div className="hello">
                                <h2>Hello!</h2>
                                <h4>Welcome, make yourself at home.</h4>
                            </div>

                            <form onSubmit={submitForm}>

                                <div className="input_text">
                                    <input type="text" placeholder="Enter Name" name="name" value={inputs.name} onChange={inputEvent} />
                                </div>
                                <div className="input_text">
                                    <input className={` ${warnemail ? "warning" : ""}`} type="text" placeholder="Enter Email" name="email" value={inputs.email} onChange={inputEvent} />
                                    <p className={` ${danger ? "danger" : ""}`}><i className="fa fa-warning"></i>Please enter a valid email address.</p>
                                </div>
                                <div className="input_text">
                                    <input className={` ${warnpass ? "warning" : ""}`} type={pass} placeholder="Enter Password" name="password" value={inputs.password} onChange={inputEvent} />
                                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}></i>
                                </div>
                                <div className="recovery">
                                    <p>Recovery Password</p>
                                </div>
                                <div className="btn">
                                    <button type="submit" disabled={loading}>{loading ? "Loading...": "Sign Up"}</button>
                                </div>

                            </form>

                            <hr />
                            <div className="or">
                                <p>or signin with</p>
                            </div>
                            <div className="boxes">
                                <span><img src="https://imgur.com/XnY9cKl.png" /></span>
                                <span><img src="https://imgur.com/ODlSChL.png" /></span>
                                <span><img src="https://imgur.com/mPBRdQt.png" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Signup
