import React from 'react'
import "./about.css";
import One from "../assets/8.jpg";

function Aboutus() {
  return (
    <section id='aboutus'>
              <div className='container-fluid dabur'>
          <div className='content-section'>
            <h1>about<span>us</span>
            </h1>
            <p>
            At DreaminInteriors, We're passionate about transforming spaces into captivating experiences. With a commitment to creativity, innovation, and personalized design, we specialize in crafting interiors that reflect your unique vision and lifestyle.Our Approach:
Every project we undertake is a journey of collaboration and inspiration. We believe in understanding your aspirations, preferences, and the essence of the space before
 translating them into breathtaking designs. Our team of skilled designers, architects, and craftsmen work cohesively to bring your dreams to life.
 We don't just design spaces, we craft experiences. Our goal is to create interiors that resonate with you on a deeper level, elevating your lifestyle and leaving a lasting impression.
 Experience the Art of Interior Design with dreaminInteriors
            </p>
           
          </div>
          <div className='image-section '>
            <img src={One} />
          </div>
          </div>
        </section>
  )
}

export default Aboutus