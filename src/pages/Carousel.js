import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "./carousel.css";
import Pot from "../assets/1.jpg";
import Pot1 from "../assets/2.jpg";
import Pot2 from "../assets/3.jpg";
import Pot3 from "../assets/4.jpg";
import Pot4 from "../assets/5.jpg";
import Pot5 from "../assets/6.jpg";
import Pot6 from "../assets/7.jpg";
import Pot7 from "../assets/8.jpg";

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./carousel.css";
function Carousel() {
  return (
    <section id="carousel">

        <div className='exitar'>
        <h1>DESIRED DESIGNS</h1>
        <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Pot}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot1}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot2}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot3}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot4}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot5}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot6}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={Pot7}/>
        </SwiperSlide>
      </Swiper>
    </>
        </div>
    </section>
  )
}

export default Carousel



