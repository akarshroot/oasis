import React from 'react'
import './Home.css'
import infog from '../assets/infog.png'
import arrow from '../assets/arrow.png'
import Footer from '../Footer'

function Home() {
  return (
    <>
      <div className='home-container'>
        <div className='home-tagline'>
          <b> Your foremost choice for<br /> digital healthcare</b>
        </div>
        <div className='row-1'>
          <div className='home-content'>
            A cloud based virtual care platform integrated with <br />AI/ML that helps to keep a track of your health.
          </div>
          <img src={infog} className='home-img' />
          <button class="button-30" role="button">Get Started<img className='btn-arrow' src={arrow}></img></button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home