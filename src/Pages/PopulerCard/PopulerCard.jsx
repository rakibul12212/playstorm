import React from 'react';
import './PopulerCard.css'

const PopulerCard = () => {
    const Data = [
        {
          id: 1,
          code:203,
          bid:1.38,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/BTyfVt6/hot-bids-1.png',
          userName: 'remeol',
        },
        {
          id: 2,
          code:596,
          bid:2.85,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/qJ48pTG/hot-bids-2.png',
          userName: 'remeol',
        },
        {
          id: 3,
          code:186,
          bid:1.58,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/MSc6dTL/hot-bids-3.png',
          userName: 'remeol',
        },
        {
          id: 4,
          code:897,
          bid:3.38,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/7JxYgjv/hot-bids-4.png',
          userName: 'remeol',
        },
        {
          id: 5,
          code:203,
          bid:1.38,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/mzmx3k0/pc-5.png',
          userName: 'remeol',
        },
        {
          id: 6,
          code:596,
          bid:2.85,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/88DjmvF/pc-6.png',
          userName: 'remeol',
        },
        {
          id: 7,
          code:186,
          bid:1.58,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/RDjCCKP/pc-7.png',
          userName: 'remeol',
        },
        {
          id: 8,
          code:897,
          bid:3.38,
          userImg: 'https://i.ibb.co/DVv1Tb8/user.png',
          img: 'https://i.ibb.co/n0drxvY/pc-8.png',
          userName: 'remeol',
        },
        
      ];
    return (
        <div className='p-20 text-white' id='pc-bg'>
            <div className='container mx-auto sm:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                <div>
                    <p className='font-bold text-2xl w-64'>Populer Collection for NFT Digital Art</p>
                </div>
                <div className='text-sm text-gray-400'>
                    <p>The collection showcase a divarse of artistic styles,themes and medium including digital points 3D sculpture, animation, virtual reality experience and generative art.</p>
                    <a href="#" className='text-orange-500 py-1'><u>See Details</u></a>
                </div>
            </div>

            <div className="container mx-auto sm:px-4 md:px-10 lg:px-20 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Data.map((item) => (
        <div key={item.id} className="max-w-xs rounded-2xl overflow-hidden shadow mb-4 hover:bg-slate-800 border-2 border-slate-800">
          <div className='flex justify-between p-2 px-2'>
            <div className='flex'>
              <img className="w-7 h-7 rounded-full" src={item.userImg} alt="User Avatar" />
              <p className="font-sm text-sm p-1 text-gray-400">@{item.userName}</p>
            </div>
            <div className='font-bold '>
              <button>. . .</button>
            </div>
          </div>
          <div className='px-2 rounded-full'>
            <img className="rounded-xl" src={item.img} alt="img" />
          </div>
          <div>
            <p className='px-3 text-base font-bold'>PSR #{item.code}</p>
            <div className='flex justify-between px-3 pb-2'>
              <div>
                <p className='text-gray-400 text-xs'>Current Bid</p>
                <p className='text-xs text-orange-500'>{item.bid} ETH</p>
              </div>
              <div className='pt-1'>
                <button type="button" className="relative text-xs rounded bg-orange-500 text-white hover:text-white hover:bg-orange-600 border-none py-1 px-2">Place A Bid</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    );
};

export default PopulerCard;