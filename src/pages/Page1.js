import React from 'react'
import "./page1.css";

function Page1() {
  return (
<section id="page1"><div className='port'>
    <h1>what <span>we do</span></h1>
    <div className='row justify-content-between'>

        <div className='cards col-xl-4 col-md-6 col-sm-12'>
            <div className='front'>
                <h4 className='pott'>Home Interior Designs</h4>
            </div>
            <div className='back'>
                <h4>Unveiling the Art of Home Interior Design
                </h4>
                <p>At dream in interiors, we redefine the way you experience your living spaces. Our expert team of designers and architects combine creativity and functionality to craft interior designs that resonate with your personality and aspirations.
                    Every nook and corner of your home holds the potential for a captivating story.</p>
            </div>
        </div>
        <div className='cards col-xl-4 col-md-6 col-sm-12'>
            <div className='front1'>
                <h4 className='pott'>Restaurant Interior Designs</h4>
            </div>
            <div className='back'>
                <h4>Crafting Remarkable Restaurant Interior Designs
                </h4>
                <p>We believe that dining is not just about food, it's an immersive experience that engages all senses. Our team of talented 
                    designers and architects are dedicated to creating restaurant interiors that not only complement the cuisine but also enhance the overall dining journey.</p>
            </div>
        </div>
        <div className='cards col-xl-4 col-md-6 col-sm-12'>
            <div className='front2'>
                <h4 className='pott'>Industrial Interior Design</h4>
            </div>
            <div className='back'>
                <h4>Forging Spaces of Innovation
                </h4>
                <p>We harness the power of industrial aesthetics to create spaces that celebrate functionality, raw beauty, and innovation. Our team of expert
                     designers and architects embrace the industrial spirit, transforming spaces into dynamic environments that inspire creativity and productivity.</p>
            </div>
        </div>
    </div>
    <div className='ora'>
        <h2> DREAMIN INTERIORS 50% DISCOUNT</h2>
    </div>
    </div></section>
  )
}

export default Page1