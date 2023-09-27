import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className='p-12'>
           <div className='text-center'>
                <p className='text-white pb-5'>We Have The Best NFT Digital Artists</p>
                <p className='text-gray-400 text-sm px-56 pb-5'>Our artists process a remarkable ability to maarge cutting-edge technology with artist expression,resulting in captiviting and visually stunning artworks.</p>
           </div>
           <div className=' flex justify-center'>
                <div className='px-5'>
                    <p className='font-bold text-3xl text-white'>10K+</p>
                    <p className='text-orange-500'>Rare NFT's</p>
                </div>
                <div className='px-5'>
                    <p className='font-bold text-3xl text-white'>50K+</p>
                    <p className='text-orange-500'>Products</p>
                </div>
                <div className='px-5'>
                    <p className='font-bold text-3xl text-white'>08K+</p>
                    <p className='text-orange-500'>Artistss</p>
                </div>
           </div>
        </div>
    );
};

export default Banner;