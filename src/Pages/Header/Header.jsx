import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';

import './Header.css'




const Header = () => {
    return (
        <div className='flex'>
            <div className='pl-40 pt-20'>
                <p className='text-start tracking-wider'><span className='text-4xl font-bold'>Mint  </span>   <span className='text-4xl font-light'>And  </span> <span className='text-4xl font-bold'>Sell </span><br />
                <div className='flex pt-2'>
                   <span className='text-4xl font-bold'>Web3  </span>
                   <img src="https://i.ibb.co/n6ZQbsH/header-img1.png" alt="" className='h-10 w-40 gap-2   rounded-full'/>
                </div>
                <div className='flex pt-2'>
                    <img src="https://i.ibb.co/Y0zd13S/header-img2.png" alt="" className='h-9 w-25 '/>
                    <span className='text-4xl font-light ps-3 font-kristi'>Digital Art</span>
                </div>
                </p>
                <p className='text-sm pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi error beatae blanditiis labore totam consequuntur? Quisquam esse perspiciatis ab, nulla aperiam error debitis eaque officia neque, alias assumenda accusantium.</p>
                <div className='pt-5'>
                   <button type="button" className="relative rounded bg-orange-500 px-4 py-2 text-white hover:text-white hover:bg-orange-600 border-none ">Explore The Market</button>
                </div>
            </div>
         
            <div className='px-40 py-5'>
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}className="mySwiper">
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG/800px-Casio_OCEANUS_OCW-S1350PC-1AJR_01.JPG" alt="" /></SwiperSlide>
                   
                </Swiper>
            </div>
     
            
        </div>
    );
};

export default Header;

