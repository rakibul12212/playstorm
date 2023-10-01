import React from 'react';

const CreateNfts = () => {
    return (
        <div className='p-20'>
            <div>
                <p className='font-bold text-2xl text-center'>Create and Sell Your NFTs</p>
            </div>
            <div  className="container mx-auto sm:px-4 md:px-10 lg:px-10 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                <div className='border-2 border-slate-300 rounded-xl p-5 '>
                    <img src="https://i.ibb.co/Kyvzhtv/icon-1.png" alt="" />
                    <p className='py-3 font-bold '>Setup Your Wallet</p>
                    <p>Setting up your wallet is the first step towards unlocking a universe of unique and valuable assets</p>
                </div>
                <div className='border-2 border-slate-300 rounded-xl p-4'>
                    <img src="https://i.ibb.co/s9Y20Xv/icon-2.png" alt="" />
                    <p className='py-3 font-bold '>Create Your Collection</p>
                    <p>Take center stage as an artist, curator and visonary share your unique creations with the world</p>
                </div>
                <div className='border-2 border-slate-300 rounded-xl p-4'>
                    <img src="https://i.ibb.co/cJMqQdc/icon-3.png" alt="" />
                    <p className='py-3 font-bold '>Add Your NFTs</p>
                    <p>Add your NFT to our curated collection and share your unique creations with a global audience</p>
                </div>
                <div className='border-2 border-slate-300 rounded-xl p-4'>
                    <img src="https://i.ibb.co/bN4hYtf/icon-4.png" alt="" />
                    <p className='py-3 font-bold '>List Theme for Sale</p>
                    <p>Selling your non-fungible tokens (NFTs) is your gateway to monetizing your digital art</p>
                </div>
            </div>
        </div>
    );
};

export default CreateNfts;