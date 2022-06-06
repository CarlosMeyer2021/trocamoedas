import React, { useState, useEffect } from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center  bg-[#191970] text-gray-300  border-b-4 border-[#DAA520] mb-6 px-2'>

      <div className='w-full flex justify-center items-center'>
        <div className='flex justify-center items-center'>
          <span className='text-[#DAA520] font-bold text-5xl'>Troca</span>
          <span>
            <img src={Logo} alt="Logo troca moedas" className='w-[70px] h-[60px]' />
          </span>
          <span className='text-[#DAA520] font-bold text-5xl'>Moedas</span>
        </div>
      </div>

    </div>
  )
}

export default Navbar