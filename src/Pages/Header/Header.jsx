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
        <div className='flex justify-center gap-x-16 m-4'>
        <div className='pt-20'>
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
            <p className='text-sm pt-5 text-gray-500 w-96'>Minting and selling web3 digital art involves creating unique artworks using blockchain technology and arketing them available for purchase on decentralize platform</p>
            <div className='pt-5'>
               <button type="button" className="relative rounded bg-orange-500 px-4 py-2 text-white hover:text-white hover:bg-orange-600 border-none ">Explore The Market</button>
            </div>
        </div>
     
        <div >
            <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}className="mySwiper">
                <SwiperSlide><img src="https://i.pinimg.com/474x/b6/45/d0/b645d01a3f2175105e52f387dadb594e.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/736x/35/8f/ce/358fce98df0fb868c70e5c40322cae9a.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/564x/02/9f/d8/029fd8d72f4d327afe6df991ea555d8f.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/564x/8a/1f/ea/8a1fea7ce50ead78719c6bb92debf294.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
 
        
    </div>






    
    );
};

export default Header;

