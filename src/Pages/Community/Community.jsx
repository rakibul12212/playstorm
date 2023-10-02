import React from 'react';
import './Community.css'

const Community = () => {
    return (
        <div id='c-bg'>
           <div className='p-5 md:p-10 text-center'>
      <p className='text-xl md:text-2xl font-bold py-1'>Let's Start Minting</p>
      <p className='text-gray-500 px-2 md:px-40 py-2 pb-5'>The progress serves multiple purposes, such as securing the network, validating transactions, and creating new units of cryptocurrency</p>
      <button type="button" className="relative rounded bg-orange-500 px-4 py-2 text-white hover:text-white hover:bg-orange-600 border-none ">Join Our Community</button>
    </div>
        </div>
    );
};

export default Community;