import React from 'react'
import { FaGithub } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";


function Footer() {
  return (
    <div className='top-footer text-[#fff]'>
      <footer>
          <div className='footer-icon'>
              <a href="https://github.com/Dorail" target='_blink'><FaGithub className='mx-auto mb-8'/></a>
          </div>
          <div className='footer-text flex justify-center items-center'>
              <a href="https://github.com/Dorail" target='_blink' className='flex justify-center items-center'><p>@2024 copyright by Dorail</p><IoCodeSlashSharp className='ml-4 font-semibold text-3xl' /></a>
          </div>
      </footer>
    </div>
  )
}

export default Footer