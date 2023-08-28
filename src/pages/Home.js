import React from 'react'
import "animate.css";
import "./home.css";
import What from "../assets/what.png";
import { BsWhatsapp } from 'react-icons/bs';
function Home() {
  return (
    <section id='home'>
    <div className='tron'>
        <div className='content'>
<h1 className='animate__animated animate__fadeInLeft'><span>WE ARE</span> PROFESSIONAL DESIGNERS </h1>
<h3 className='animate__animated animate__rotateInUpRight'>welcome to our fascinating workplace ,we undertake fabulous designs and works
</h3>
<a href={"https://wa.me/9177954555"} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
        <BsWhatsapp size={30} />
      </a>
<a className='neon-button animate__animated animate__heartBeat'>Contact us</a>
        </div>
        
        <div className='oliver'>
        <img src={What} alt="" />
    </div>
    </div>
 
    </section>
  )
}

export default Home