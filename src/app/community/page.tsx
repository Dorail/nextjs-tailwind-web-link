import React from 'react'
import Image from 'next/image'

//Component
import Nav from '../Component/Nav'
import Main2 from '../Component/Main2'
import Footer from '../Component/Footer'

function Communitypage() {
  return (
    <div className='text-[#fff]'>
        <Nav />
        <br /><br />
        <div className='text-center flex justify-center items-center mb-4'>
          <h1 className='text-5xl font-bold'>Rive Experts</h1>
        </div>
        <div className='flex justify-center items-center text-center'>
          <p className='text-[#999] font-bold text-2xl'>Rive Experts are freelancers, studios, <br /> and agencies that can help bring your projects to life.</p>
        </div>
        <div className='flex justify-center items-center mt-5'>
            <button className='mx-2 rounded-full px-6 py-2 bg-[#333] font-bold text-[#fff] bg-gradient-to-r from-[#706DDD] to-[#62A7D7]'>Browse Experts</button>
            <button className='mx-2 rounded-full px-6 py-2 bg-[#333] font-bold text-[#fff]'>Become an Expert</button>
          </div>
        <div className='container flex justify-center items-center mx-auto my-10'>
          <Image src="/imgcommunity/1.png" alt='' width={1200} height={1200} ></Image>
        </div>
        <div>
          <Main2 />
          <Footer />
        </div>
    </div>
  )
}

export default Communitypage