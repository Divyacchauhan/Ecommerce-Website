import React from 'react'
import './Hero.css'
import hand from '../Assets/hand-icon.png'
import arrow  from '../Assets/arrow1.png'
import girlImg from '../Assets/girlsimg-removebg-preview.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
         <div className="hand-hand-icon">
           <p>New</p>
            <img src={hand} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
       
       <div className='hero-latest-btn'>
        <div>Latest Collection</div>
        <img src={arrow}alt="" />
       </div>
       </div>
      <div className="hero-right">
        <img src={girlImg} alt="" />
      </div>

    </div>
  )
}

export default Hero
