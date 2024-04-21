import React from 'react'

function Main2() {
  return (
    <div id='Main2'>
        <div className='container mx-auto my-0 flex justify-center items-center'>
            <div id='text-Main2' className='text-center mt-64'>
                <h1 className='text-[#fff] text-3xl font-semibold text-center pb-2'>Start building beautiful</h1>
                <h1 className='text-[#fff] text-3xl font-semibold text-center mb-6'>interactive graphics</h1>
                <button className='text-[#A82481] bg-[#fff] px-4 py-2 rounded-full text-xl font-semibold '>Get Started</button> 
            </div>
        </div>
            <div className='flex justify-center items-center mt-40'>
                <div className='text-[#fff]'>
                    <h1 className='text-xl font-bold'>Join our newsletter</h1>
                    <div className='text-[#999] flex items-center'>
                        <p className='text-lg mr-4'>Get all the latest Rive news delivered to your inbox.</p>                   
                        <div>
                            <input id='main2Inpit' className='outline-none border-none p-2 py-3.5 pr-40 rounded text-[#999] text-medium' type="gmail" placeholder='email@rive.app' />
                        </div>
                        <div className=''>
                            <button className='text-[#fff] px-3 py-4 bg-[#333] rounded ml-4 font-semibold'>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Main2