import React from 'react'
import Image from 'next/image'

//Componenet
import Nav from '../Component/Nav'
import Mainlearnpage from '../Component/ConponentLearn/Main'
import Main2 from '../Component/Main2'
import Footer from '../Component/Footer'

function Leanpage() {
  return (
    <div className='text-[#fff] bg-[#1D1D1D]'>
        <Nav />
        <br /><br />
        <div className='container mx-auto my-0 flex justify-center items-center'>
          <div className='flex mb-4'>
            {/* <img src="/imgpricing/1.png" className='mr-2' alt="" /> */}
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#1DCAF6] to-[#08B066] text-3xl font-semibold'>Rive Runtimes</h1>
          </div>
        </div>
        <div className='text-center flex justify-center items-center mb-4'>
          <h1 className='text-5xl font-bold'>A major breakthrough in <br /> real-time vector graphics</h1>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-[#999] font-bold text-2xl'>Insane speed. Exceptional quality. Tiny size.</p>
        </div>
        <div className='container flex justify-center items-center mx-auto my-4'>
          <Image src="/imglearn/1.png" alt='' width={850} height={850} ></Image>
        </div>

        <div className='bg-[#111]'>
          <Mainlearnpage />
          <Main2 />
          <Footer />

        </div>
    </div>
  )
}

export default Leanpage