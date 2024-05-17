import React from 'react'
import Image from 'next/image'

function Mainlearnpage() {
  return (
    <div>
        
        <div className='container mx-auto my-0 w-2/3 flex'>
            <div className="left mt-10">
                <div className="text-1">
                    <h1 className='text-3xl font-bold my-3'>A technological leap</h1>
                    <p className='w-3/4 text-[#999] text-lg'>The Rive Renderer draws an unprecedented amount of vectors on screen. Everything animates and deforms without losing quality. Graphics remain crisp and clear regardless of scale, resolution, or device. Best of all, it doesn't require new hardware.</p>
                    <button className='bg-[#272727] rounded-full px-6 py-2 my-3 font-bold'>Read the blog</button>
                </div>
            </div>
            <div className="right mt-10 mb-10">
                <Image className='relative' src="/imglearn/left1.png" alt='' width={1500} height={1500} ></Image>
            </div>
        </div>

        <hr className='container mx-auto w-2/3 border-solid border-[#333]'/>

        <div className='container mx-auto my-0 w-2/3 flex justify-between'>
            <div className="left mt-10 mb-10">
                <Image className='relative' src="/imglearn/left2.png" alt='' width={1500} height={1500} ></Image>
            </div>
            <div className="right mt-10 mb-10 relative left-56">
                <div className="text-1">
                    <h1 className='text-3xl font-bold my-3'>Perfect text</h1>
                    <p className='w-3/4 text-[#999] text-lg'>You dont have to sacrifice quality for speed the Rive Renderer delivers both. Text appears perfectly crisp at any size, thanks to analytic antialiasing. You can fill the screen with animated text that looks perfectly sharp, all without making a dent in framerate.</p>
                    {/* <button className='bg-[#272727] rounded-full px-6 py-2 my-3 font-bold'>Read the blog</button> */}
                </div>
            </div>
        </div>

        <hr className='container mx-auto w-2/3 border-solid border-[#333]'/>

        <div className='container mx-auto my-0 w-2/3 flex'>
            <div className="left mt-10 mb-10">
                <div className="text-1">
                    <h1 className='text-3xl font-bold my-3'>Unlocks new features</h1>
                    <p className='w-3/4 text-[#999] text-lg'>Rive runs on <span className='underline decoration-2s'>many platforms.</span> These platforms use different renderers with varying features. Making Rive visuals consistent and performant across all requires effort. It also means we cant quickly implement highly requested features (like blurs and drop shadows) since not all renderers support them.</p>
                    <br />
                    <p className='w-3/4 text-[#999] text-lg'>The Rive Renderer allows us to support all new features across platforms while maintaining visual fidelity with the Rive Editor. Its also much faster at rendering Rive content than other platform renderers.</p>
                </div>
            </div>
            <div className="right mt-10 mb-10">
                <Image className='relative' src="/imglearn/left3.png" alt='' width={1500} height={1500} ></Image>
            </div>
        </div>

        <hr className='container mx-auto w-2/3 border-solid border-[#333]'/>

        <div className='container mx-auto my-0 mt-20 w-2/3 flex justify-center items-center text-center'>
            <div className=''>
                <h1 className='text-4xl font-bold'>Custom integrations</h1>
                <div className='text-[#999] p-3 text-xl'>
                    <p>We're already working with several companies to integrate the</p>
                    <p>Rive Renderer into their custom platforms. Want to get the</p>
                    <p>Rive Renderer running in your product?</p>      
                </div>
                <div>
                    <button className='mr-2 px-8 py-2 text-lg font-semibold rounded-full bg-[#333]'>Contact us</button>
                    <button className='ml-2 px-8 py-2 text-lg font-semibold rounded-full bg-[#333]'>Read the blog</button>
                </div>
            </div>
        </div>

        <hr className='container mx-auto w-2/3 border-solid border-[#333] mt-20'/>


    </div>
    
  )
}

export default Mainlearnpage