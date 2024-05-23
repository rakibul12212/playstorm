
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className='p-4 sm:p-6'>
  <div className='text-center'>
    <p className='text-white text-lg sm:text-xl pb-3 sm:pb-5'>We Have The Best NFT Digital Artists</p>
    <p className='text-gray-400 text-sm sm:text-base px-3 sm:px-56 pb-3 sm:pb-5'>Our artists possess a remarkable ability to merge cutting-edge technology with artistic expression, resulting in captivating and visually stunning artworks.</p>
  </div>
  <div className='flex flex-row sm:flex-row justify-center'>
    <div className='p-3 sm:p-5'>
      <p className='font-bold text-xl sm:text-3xl text-white'>10K+</p>
      <p className='text-orange-500'>Rare NFT's</p>
    </div>
    <div className='p-3 sm:p-5'>
      <p className='font-bold text-xl sm:text-3xl text-white'>50K+</p>
      <p className='text-orange-500'>Products</p>
    </div>
    <div className='p-3 sm:p-5'>
      <p className='font-bold text-xl sm:text-3xl text-white'>08K+</p>
      <p className='text-orange-500'>Artists</p>
    </div>
  </div>
</div>

    );
};

export default Banner;