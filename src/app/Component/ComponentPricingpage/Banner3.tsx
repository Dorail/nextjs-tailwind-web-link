import React from 'react'

function BannerPricingpage3() {
  return (
    <div id='BannerPricingpage' className='drop-shadow-2xl'>
        <div className='container mx-auto my-auto flex justify-between relative'>
            <div className="left mt-48">
                {/* <div className='flex'>
                    <img className='flex mr-2' src="/imgloadpage/ban1.png" alt="" />
                    <h1 className='w-1/6 bg-clip-text text-transparent bg-gradient-to-r from-[#D0C2FF] to-[#8FA3FF] text-3xl font-semibold'>State Machine</h1>
                </div> */}
                <div className='grouptext w-2/5'>
                    <h1 className='text-[#fff] text-4xl font-semibold py-4 leading-tight'>Designed for control</h1>
                    <p className='text-[#999] text-xl'>Our runtimes give you the power to easily control your Rive files on any platform. Simply play the file as designed in the editor or manipulate everything with code.</p>
                </div> 
                <button className='text-[#fff] py-2 px-8 bg-gradient-to-r from-[#7068DE] to-[#D85AB9] rounded-full font-semibold mt-8 text-xl'>Learn more</button>
            </div>
            <div className="right mt-48 absolute right-16 -top-24 drop-shadow-2xl">
                <img className='rounded-3xl bg-no-repeat bg-center bg-fixed' src="/imgpricing/ban3.png" width={600} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BannerPricingpage3