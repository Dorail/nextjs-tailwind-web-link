import React from 'react'

function BannerPricingpage2() {
  return (
    <div id='Bannerloadpage2' className='drop-shadow-2xl'>
        <div className='container mx-auto my-0 flex justify-around'>

            <div className="left mt-10 text-[#fff]">
                <img className='rounded-3xl bg-no-repeat bg-center bg-fixed' src="/imgpricing/ba2.png" width={500} alt="" />

            

            </div>


            <div id='Ban222Right' className="right-0 mt-48 relative">
                <div className='flex mb-4'>
                    <h1 className='w-2/5 bg-clip-text text-transparent bg-[#fff] text-3xl font-semibold'>Entirely open-source</h1>
                </div>
                <div className='grouptext w-3/5'>
                    <p className='text-[#999] text-xl'>Our runtimes are transparent, giving you the ability to evaluate, contribute, or modify them.</p>
                </div> 
                <button className='text-[#fff] py-2 px-8 bg-gradient-to-r from-[#7068DE] to-[#D85AB9] rounded-full font-semibold mt-8 text-xl'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default BannerPricingpage2