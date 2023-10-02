import React from 'react';
import './TopCollection.css'

const TopCollection = () => {
    const firstData = [
        {
          id: 1,
          title:'The Futr Crystal',
          bid:1.38,
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          cardImg: 'https://i.ibb.co/LvghQ1M/image-7.png',
          quantity:10,
          
        },
        
      ];
    
      const secondData = [
        {
          id: 1,
          title:'The Futr Crystal',
          bid:2.85,
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          cardImg: 'https://i.ibb.co/qN6xDkB/image-5.png'
        },
        {
          id: 2,
          title:'The Futr Crystal',
          bid:1.58,
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          cardImg: 'https://i.ibb.co/YP0wSZ3/image-4.png'
        }, 
        {
          id: 3,
          title:'The Futr Crystal',
          bid:1.60,
          userImg: 'https://i.ibb.co/zndcNw1/image-8.png',
          cardImg: 'https://i.ibb.co/6tQgzq0/image-6.png'
        } 
      ];
      const thirdData = [
        {
          id: 1,
          serial:1,
          title:'NFtThor',
          bid:2.85,
          userImg: 'https://i.ibb.co/kBB3G43/u1.png',
          cardImg: 'https://i.ibb.co/qN6xDkB/image-5.png',
          amount:  '19,769,39',
          ratio:26.52

        },
        {
          id: 2,
          serial:2,
          title:'FtSpider',
          bid:1.58,
          userImg: 'https://i.ibb.co/Jpq09MB/u2.png',
          cardImg: 'https://i.ibb.co/YP0wSZ3/image-4.png',
          amount:  '17,769,39',
          ratio:10.20
        }, 
        {
          id: 3,
          serial:3,
          title:'GTgod',
          bid:1.60,
          userImg: 'https://i.ibb.co/SP2zzxW/u3.png',
          cardImg: 'https://i.ibb.co/6tQgzq0/image-6.png',
          amount:  '15,769,39',
          ratio:5.52
        },
        {
            id: 4,
            serial:4,
            title:'LeMok',
            bid:1.60,
            userImg: 'https://i.ibb.co/VtsYZqT/u4.png',
            cardImg: 'https://i.ibb.co/6tQgzq0/image-6.png',
            amount:  '12,769,39',
            ratio:2.92
          },
          {
            id: 5,
            serial:5,
            title:'NFtThor',
            bid:1.60,
            userImg: 'https://i.ibb.co/3BMrFph/u5.png',
            cardImg: 'https://i.ibb.co/6tQgzq0/image-6.png',
            amount:  '12,769,39',
            ratio:1.52
          },
         
      ];

    return (
        <div id='tc-bg' className='flex flex-wrap py-10'>
        <div className='container py-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          {firstData.map((item) => (
            <div key={item.id} className='rounded-2xl overflow-hidden mb-4'>
              <div className='px-2 rounded-full'>
                <img className="rounded-xl" src={item.cardImg} alt="img" />
              </div>
              <div className='flex'>
                <div className='flex p-2'>
                  <div className='px-2'>
                    <img className="w-8 h-8 rounded-full" src={item.userImg} alt="User Avatar" />
                  </div>
                  <div>
                    <p className='text-sm font-bold'>{item.title}</p>
                    <p className='text-xs text-gray-400'>{item.quantity} In Stock</p>
                  </div>
                </div>
                <div className='flex p-2 px-3 pb-2'>
                  <div>
                    <p className='text-gray-400 text-xs'>Highest Bid</p>
                    <p className='text-xs text-orange-500'>{item.bid} ETH</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        <div className=' py-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          {secondData.map((item) => (
            <div key={item.id} className='rounded-2xl overflow-hidden mb-4'>
              
                <div className='flex'>
                  <div className='px-2 rounded-full w-32'>
                    <img className="rounded-xl" src={item.cardImg} alt="img" />
                  </div>
                  <div className='ps-3 py-5'>
                    <p className='text-sm font-bold'>{item.title}</p>
                    <div className='text-gray-400 text-xs flex pt-2'>
                      <img className="w-4 h-4 rounded-full" src={item.userImg} alt="User Avatar" />
                      <p className='ps-1'>{item.bid} ETH</p>
                    </div>
                    <button className='text-xs text-orange-500'><u>Place Bid</u></button>
                  </div>
                </div>
              
            </div>
          ))}
        </div>
      
        <div className='container py-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6'>
          <div className='px-5 py-3'>
            <p className='font-bold'>Top Challenge Over</p>
            <p className='text-orange-500'>Last 7 Days</p>
          </div>
          <div>
            {thirdData.map((item) => (
              <div key={item.id} className='flex justify-between px-5 py-1 rounded-2xl overflow-hidden mb-4'>
                <div className='flex'>
                  <div className='p-2'>
                    <p>{item.serial}</p>
                  </div>
                  <div>
                    <img className="w-10 h-10 rounded-full" src={item.userImg} alt="User Avatar" />
                  </div>
                  <div className='px-5'>
                    <p className='text-sm font-bold'>{item.title}</p>
                    <p className='text-xs text-gray-400'>$<span>{item.amount}</span></p>
                  </div>
                </div>
                <div className='font-lg text-green-600'>+{item.ratio}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      

    );
};

export default TopCollection;
