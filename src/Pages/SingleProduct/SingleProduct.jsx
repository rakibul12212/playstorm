import React from 'react';
import './SingleProduct.css'

const SingleProduct = () => {
    const Data = [
        {
          id: 1,
          Name:'Jenia Mors',
          userName:'jeniaMors',
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          
          
        },
        {
          id: 2,
          Name:'Rimeol Jens',
          userName:'rimeoljens',
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          
          
        },
        
      ];
    return (
        <div className="container flex justify-between py-10">
            <div className="container">
              <img src="https://i.ibb.co/dmWcXbW/sp-img.png" alt="Image" />
            </div>
           <div className='py-10'>
                <div className="text-container border-b-2">
                    <p className='text-2xl font-bold py-2'>NFT Digital Art #12543</p>
                    <p className='text-gray-400 w-80 py-2'>NFT Digital Art #12543 is a unique and distinctive place of digital art work that hasbeen tokenized as a non fungible token (NFT).It represent a fution of digital creativity and blockchain technology.Making it on-of-a kind and secure varifyable.</p>
                    <p className='font-medium py-2'>Highest Bid: <span className='text-orange-500'>15.39</span> <span className='text-orange-500'>ETH</span></p>
                </div>
              <div className='border-b-2'>
                    {Data.map((item) => (
                    <div key={item.id} className='rounded-2xl overflow-hidden mb-4 '>
                        <div >
                            <div className='flex '>
                                <div className='flex  pt-4'>
                                    <div className='px-2'>
                                        <img className="w-10 h-10 rounded-full" src={item.userImg} alt="User Avatar" />
                                    </div>
                                    <div>
                                        <p className='text-sm font-bold'>{item.Name}</p>
                                        <p className='text-xs text-gray-400'>{item.userName} In </p>
                                    </div>
                                </div>    
                            </div>
                           
                        </div>
                </div>
             ))}
           
              </div>
              <div className='flex justify-between items-center px-5 py-2'>
                 <p className='font-medium'>13.38 ETH</p>
                 <button type="button" className="relative rounded bg-orange-500 px-3 py-1 text-white hover:text-white hover:bg-orange-600 border-none font-normal text-sm">Buy Now</button>
              </div>
           </div>
      </div>
    );
};

export default SingleProduct;