
import './Community.css'

const Community = () => {
    return (
        <div id='c-bg' className='my-5'>
           <div className='p-5 md:p-10 text-center'>
      <p className='text-xl md:text-2xl font-bold py-1'>Let's Start Minting</p>
      <p className='text-gray-500 px-2 md:px-40 py-2 pb-5'>The progress serves multiple purposes, such as securing the network, validating transactions, and creating new units of cryptocurrency</p>
      {/* <button type="button" className="relative rounded bg-orange-500 px-4 py-2 text-white hover:text-white hover:bg-orange-600 border-none ">Join Our Community</button> */}
      <button type="button" className="relative rounded bg-orange-500 px-4 py-2 text-white hover:text-white hover:bg-orange-600 border-none md:px-3 md:py-2 md:text-lg">
                            <div className='flex items-center gap-1'>
                                <span className="md:text-lg">Join Our Community</span>
                                <span className='pt-1 md:pt-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </div>
                        </button>
    </div>
        </div>
    );
};

export default Community;