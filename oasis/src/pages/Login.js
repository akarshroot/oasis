import React, { useEffect } from 'react'
import './Login.css'

function Login() {
    const currentUser = false
    const initUserLoading = false
    useEffect(() => {
        if (currentUser) {
            window.location.replace("/dashboard")
        }
    }, [])



    return (
        <>
        <div id="intro" className="bg-image shadow-2-strong">
            
        </div>
        </>
    )
}

export default Login
