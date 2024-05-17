import React from 'react'

//Componenet
import Nav from '../Component/Nav'
import BannerPricingpage from '../Component/ComponentPricingpage/Banner'
import BannerPricingpage2 from '../Component/ComponentPricingpage/Banner2'
import BannerPricingpage3 from '../Component/ComponentPricingpage/Banner3'
import Main2 from '../Component/Main2'
import Footer from '../Component/Footer'

// icon


function Pricingpage() {
  return (
    <div className='text-[#fff] bg-gradient-to-r from-[#1d1d1d] to-[#34103D]'>
        <Nav />
        <br /><br />
        <div className='container mx-auto my-0 flex justify-center items-center'>
          <div className='flex mb-4'>
            <img src="/imgpricing/1.png" className='mr-2' alt="" />
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#8F8FFF] to-[#FF8ADC] text-3xl font-semibold'>Rive Runtimes</h1>
          </div>
        </div>
        <div className='text-center flex justify-center items-center mb-4'>
          <h1 className='text-5xl font-bold'>Run Rive anywhere</h1>
        </div>
        <div className='flex justify-center items-center'>
          <p className='text-[#999] font-bold text-2xl'>Open-source libraries to load and control your <br /> Rive graphics in apps, games, and websites.</p>
        </div>
        <div className='w-1/3 mx-auto my-6 text-center'>
          <div className="grid grid-cols-5 gap-1">

            <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (3).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Javascript</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (12).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>iOS</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (9).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>macOS</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (14).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Android</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (11).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Windows</h1>
                </div>
              </div>        

          </div>
        </div>

        {/* item 2 */}

        <div className='w-1/4 mx-auto my-6 text-center'>
          <div className="grid grid-cols-4 gap-1">

            <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (6).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Flutter</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (10).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Rust</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (7).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>C++</h1>
                </div>
              </div>

              <div className="info-grid">
              <div className='flex justify-center items-center'>
                <img src="/img/banner2/logo/ban2logo (2).png" alt="" />
              </div>
                <div>
                  <h1 className='mt-3'>Defold</h1>
                </div>
              </div>      

          </div>

        </div>

        {/* item 2 */}

        <BannerPricingpage />
        <BannerPricingpage2 />
        <BannerPricingpage3 />
        <div className='bg-[#111]'>
        <Main2 />
        <Footer />
        </div>
        


    </div>
  )
}

export default Pricingpage