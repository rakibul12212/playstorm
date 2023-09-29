import React from 'react';
import './Hotbids.css';

const Hotbids = () => {
  const hotbidsData = [
    {
      id: 1,
      code:203,
      bid:1.38,
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      img: 'https://i.ibb.co/BTyfVt6/hot-bids-1.png',
      userName: 'remeol',
    },
    {
      id: 2,
      code:596,
      bid:2.85,
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      img: 'https://i.ibb.co/qJ48pTG/hot-bids-2.png',
      userName: 'remeol',
    },
    {
      id: 3,
      code:186,
      bid:158,
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      img: 'https://i.ibb.co/MSc6dTL/hot-bids-3.png',
      userName: 'remeol',
    },
    {
      id: 4,
      code:897,
      bid:3.38,
      userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      img: 'https://i.ibb.co/7JxYgjv/hot-bids-4.png',
      userName: 'remeol',
    },
  ];

  return (
    <div className='m-4 sm:m-20 '>
    <div>
      <div className='flex flex-col items-center sm:flex-row sm:gap-x-2 justify-center'>
        <img src="https://i.ibb.co/h9NLz3K/ic.png" alt="" className="w-10 h-10 sm:w-auto sm:h-auto" />
        <p className='text-xl sm:text-3xl font-bold mt-2 sm:mt-0'>Hot Bids</p>
      </div>
      <div className='container'>
      <p className='paragraph'>
        Hot Bids is an online platform that specializes in hosting and facilitating dynamic bidding events for a wide range of products and services.
      </p>
    </div>
    </div>
    <div className="container mx-auto sm:px-20 py-5 flex flex-col sm:flex-row gap-2 justify-items-stretch ">
      {hotbidsData.map((item) => (
        <div key={item.id} className="max-w-xs rounded-2xl overflow-hidden shadow mb-4 hover:bg-gray-50">
          <div className='flex justify-between p-2 px-2'>
            <div className='flex'>
              <img className="w-7 h-7 rounded-full" src={item.userImg} alt="User Avatar" />
              <p className="font-sm text-sm p-1 text-gray-400">@{item.userName}</p>
            </div>
            <div className='font-bold'>
              <button>. . .</button>
            </div>
          </div>
          <div className='px-2 rounded-full '>
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

export default Hotbids;





