import React from 'react'
import Image from 'next/image'

function Banner3() {
  return (
    <div id='Banner3' className='drop-shadow-2xl'>
        <div className='container mx-auto my-auto flex justify-between relative'>
            <div className="left mt-48">
                <div className='flex'>
                    <Image src="/img/banner2/banner2.png" alt='' width={32} height={32}></Image>
                    <h1 className='w-1/6 bg-clip-text text-transparent bg-gradient-to-r from-[#1DCAF6] to-[#08B066] text-3xl font-semibold'>Rive Editor</h1>
                </div>
                <div className='grouptext w-2/5'>
                    <h1 className='text-[#fff] text-4xl font-semibold py-4 leading-tight'>A major breakthrough in real- time vector graphics</h1>
                    <p className='text-[#999] text-xl'>The Rive Renderer can draw an unprecedented amount of vectors on screen. Everything on the screen animates at 120 fps with perfect quality.</p>
                </div> 
                <button className='text-[#fff] py-2 px-8 bg-gradient-to-r from-[#1EC9F2] to-[#0DB16A] rounded-full font-semibold mt-8 text-xl'>Learn more</button>
            </div>
            <div className="right mt-48 absolute -right-32 -top-24 drop-shadow-2xl">
                <Image className='rounded-3xl bg-no-repeat bg-center bg-fixed' src="/img/banner3/banner3.png" alt='' width={850} height={850}></Image>
            </div>
        </div>
    </div>
  )
}

export default Banner3
