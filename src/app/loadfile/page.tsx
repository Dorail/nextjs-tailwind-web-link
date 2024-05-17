import React from 'react'
import Image from 'next/image';

//Component
import Nav from '../Component/Nav'
import Bannerloadpage from '../Component/ConponentLoadpage/Bannerloadpage';
import Bannerloadpage2 from '../Component/ConponentLoadpage/Bannerloadpage2';
import Bannerloadpage3 from '../Component/ConponentLoadpage/Bannerloadpage3';
import Bannerloadpage4 from '../Component/ConponentLoadpage/Bannerloadpage4';
import Main2 from '../Component/Main2';
import Footer from '../Component/Footer';

// icon
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";

function Loadfilepage() {
  return (
    <div className='text-[#fff]'>
        <Nav />
        <br /><br />
        <div className='container mx-auto my-0 flex justify-center items-center'>
          <div className='flex mb-4'>
            <Image src="/img/banner/banner.png" alt='' width={32} height={32} ></Image>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#8FD6FF] to-[#8A80FA] text-3xl font-semibold'>Rive Editor</h1>
          </div>
        </div>
        <div className='text-center flex justify-center items-center mb-4'>
          <h1 className='text-5xl font-bold'>The design tool that <br /> creates functional graphics</h1>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-[#999] font-bold text-2xl'>Interactive, animated, and ready to ship.</p>
        </div>
        <div className='flex justify-center items-center mt-6'>
          <button className='mr-6 py-2 px-6 rounded-full text-base font-semibold bg-gradient-to-t from-[#7068DE] to-[#D85AB9]'><FaApple className='inline-block text-xl mb-1 mr-2'/>Mac</button>
          <button className='py-2 px-7 rounded-full text-base font-semibold bg-gradient-to-t from-[#706DDD] to-[#62A7D7]'><FaWindows className='inline text-xl mb-1 mr-2'/>Windows</button>
        </div>
        <div className='flex justify-center items-center mt-4 relative'>
          <Image id='imgLoadpage1' className='rounded' src="/imgloadpage/1.png" alt='' width={980} height={980} ></Image>
          <Image id='imgLoadpage' className='-z-10 absolute' src="/imgloadpage/2.png" alt='' width={750} height={750} ></Image>
        </div>
        <Bannerloadpage />
        <Bannerloadpage2 />
        <Bannerloadpage3 />
        <Bannerloadpage4 />
        <Main2 />
        <Footer />
    </div>
  )
}

export default Loadfilepage