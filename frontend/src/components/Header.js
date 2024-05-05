import React from 'react';
import Logo from '../components/Logo';
// import { CiSearch } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <header className='h-20 shadow-md bg-creem fixed w-full z-40'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between '>
        <div className='flex items-center ml-[-40px]'>
          <Logo w={170} h={170} />
        </div>
        
        
        <div className='flex items-center w-full justify-between max-w-sm'>
          <input type='text' placeholder='Search product hear ...' />
          <div className='text-lg min-w-[50px] h-8 bg-red-500 flex items-center justify-center rounded-r-full text-white '>
          <BiSearchAlt />
          </div>
        </div>

        <div>
          user icon & Cart
        </div>


      </div>
    </header>
  );
};

export default Header;
