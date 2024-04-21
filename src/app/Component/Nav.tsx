import React from 'react'
import Link from 'next/link'
import Image from "next/image";

function Nav() {
  return (
    <div id='Nav' className='mx-auto my-0 bg-[#2E2E2E] sticky top-0'>
        <div className='flex justify-center items-center'>
            <img src="/img/nav/jet.png" alt=""/>
            <p className='text-[#fff] flex justify-center items-center text-sm p-2'>Rive for Game UI</p>
        </div>
        <div className='text-[#999] bg-[#1E1E1E] flex justify-around items-center p-4'>
            <ul className='flex text-md'>
                <li><Link className='mr-8 hover:text-[#fff]' href="/">Products</Link></li>
                <li><Link className='mr-8 hover:text-[#fff]' href="/community">Community</Link></li>
                <li><Link className='mr-8 hover:text-[#fff]' href="/learn">Learn</Link></li>
                <li><Link className='mr-8 hover:text-[#fff]' href="/pricing">Pricing</Link></li>
                <li><Link className='mr-8 hover:text-[#fff]' href="/loadfile">Downloads</Link></li>
            </ul>
            <ul className='text-[#fff]'>
                <button className='py-2 px-4 rounded-full bg-gradient-to-br from-[#f17fec] to-[#550a68]'>Get Started</button>
            </ul>
        </div>
    </div>
  )
}

export default Nav
