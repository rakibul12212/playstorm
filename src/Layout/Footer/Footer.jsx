import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='nun bg-slate-300 px-20 py-4 text-slate-300 ' id='footer-bg'>
           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 border-b-2 border-slate-700 '>
                <div>
                    <div className=' p-2'>
                        <a href="#"><p className='text-2xl'><b>Play</b><span className='font-thin'>Storm</span></p></a>
                        <p className='text-sm py-3'>The homepage of PlayStorm NFT website wellcome visitors with a visually appealing design, featuring vibrant artwork and a dynamic display of tranding NFT collection.User can easity anvigate through different sections.</p>
                    </div>
                    <div className='flex gap-1 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>

                        <p className='p-1'>playstorm@email.com</p>
                    </div>
                </div>

                <div className='p-1 px-5'>
                <p className='text-bold text-2xl py-1'>About</p>
                <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/" >About NFT</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/aboutus">Live Auctions</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/blogs">NFT Blog</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/addatoy">Activity</a></p>
                </div>

                <div className='p-1 '>
                <p className='text-bold text-2xl'>Support</p>
                <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Help & Support</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Item Details</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/signin">Author Profile</a></p>
                    <p className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300 py-1"><a href="/">Collection</a></p>
                </div>

                <div className='transition duration-150 ease-in-out'>
                <p className='text-bold text-2xl'>Get Subscribed !</p>
                <p className='text-sm py-1'>Subscribe to a newsletter is great way to stay informed about the leatest news & updates</p>
                <div className='py-1'>
      <input
        type="email"
        placeholder='Enter Your Email'
        className="relative rounded bg-slate-800 py-1 px-4 text-white text-center"
        style={{ width: '100%' }}
      />
    </div>
    <div className='py-1'>
      <button
        type="button"
        className="relative rounded bg-orange-500 py-1 text-white hover:text-white hover:bg-orange-600 border-none"
        style={{ width: '100%' }}
      >
        Subscribe
      </button>
    </div>
                </div>
            </div>
                <p className='text-center p-4'>copyright 2023 <span className='font-bold text-white'>Play</span><span className='text-white font-thin'>Storm</span>- All Right Reserved</p>
    
        </div>
    );
};

export default Footer;