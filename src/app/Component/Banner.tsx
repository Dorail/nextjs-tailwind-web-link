import React from 'react'
import Image from 'next/image'

function Banner() {
  return (
    <div id='Banner' className='drop-shadow-2xl'>
        <div className='container mx-auto my-auto flex justify-between relative'>
            <div className="left mt-48">
                <div className='flex'>
                    <Image className='flex mr-2' src="/img/banner/banner.png" alt='' width={32} height={32}></Image>
                    <h1 className='w-1/6 bg-clip-text text-transparent bg-gradient-to-r from-[#8FD6FF] to-[#8A80FA] text-3xl font-semibold'>Rive Editor</h1>
                </div>
                <div className='grouptext w-2/5'>
                    <h1 className='text-[#fff] text-4xl font-semibold py-4 leading-tight'>The design tool that creates functional graphics</h1>
                    <p className='text-[#999] text-xl'>Use Rive's familiar design and animation tools with our ground-breaking State Machine to create interactive content for your products, apps, sites, and games.</p>
                </div> 
                <button className='text-[#fff] py-2 px-8 bg-gradient-to-r from-[#7068DE] to-[#61A9D6] rounded-full font-semibold mt-8 text-xl'>Learn more</button>
            </div>
            <div className="right mt-48 absolute -right-32 -top-24 drop-shadow-2xl">
                <Image className='rounded-3xl bg-no-repeat bg-center bg-fixed' src="/img/banner/right.png" alt='' width={850} height={850}></Image>
            </div>
        </div>
    </div>
  )
}

export default Banner
