import React from 'react'

function Hero() {
  return (
    <div id='Hero' className='bg-[#1E1E1E] h-1/1'>
        <div className='container mx-auto my-0 text-[#fff] text-center flex flex-col justify-center items-center'>
            <h1 id='Rive' className='text-5xl font-semibold mb-8 mt-28'> Rive </h1>
            <h1 className='text-5xl w-1/3 font-semibold mb-8'>
                Empower designers, slash dev times
            </h1>
            <a href="#" className='text-xl mb-8 py-1 rounded font-medium text-[#000] bg-[#fff] hover:bg-[#999] px-6'>Build better products together</a>
            <div className='text-[#999] text-lg'>
                <p>With Rive, complex designer-developer <span className='underline underline-offset-2'>handoff is a thing of the past.</span></p>
                <div className='flex justify-center items-center'>
                    <p className='w-1/2'>Reduce development times by empowering designers to build functional graphics with rich interactivity and animation.</p>
                </div>
            </div>
            <div>
                <p className='text-[#fff] mt-44 mb-4'>Companies bring their products and games to life with Rive.</p>
            </div>
            <div className='flex mt-5 gap-8 w-1/8 justify-center'>
                <img src="/img/hero/spon (1).png" alt="" />
                <img src="/img/hero/spon (2).png" alt="" />
                <img src="/img/hero/spon (3).png" alt="" />
                <img src="/img/hero/spon (4).png" alt="" />
                <img src="/img/hero/spon (5).png" alt="" />
                <img src="/img/hero/spon (6).png" alt="" />
                <img src="/img/hero/spon (7).png" alt="" />
            </div>
            <div className='flex mt-5 gap-8 w-1/8 justify-center'>
            <img src="/img/hero/spon (8).png" alt="" />
                <img src="/img/hero/spon (9).png" alt="" />
                <img src="/img/hero/spon (10).png" alt="" />
                <img src="/img/hero/spon (11).png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero 
