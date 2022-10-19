import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
const Navbar = () => {
const[nav, setNav] = useState(false)
  return (
    <div className=' max-w-[1640px] mx-auto flex
    justify-between items-center p-4'>
    
        <div className='flex items-center'>
            <div className=' cursor-pointer'>
            <AiOutlineMenu 
            onClick={()=>setNav(!nav)}
            size={30}/>
            </div>
            <h1 className='text-2xl sm:text-3xl 
            md:text-4xl px-2 font-bold text-green-700'> AFRO <span
            className=' font-normal text-black'>Eats</span> 
            </h1>
            <div className=' hidden lg:flex items-center 
            bg-gray-800 rounded-xl p-1 text-[14px]'>
                <p className=' bg-green-800 text-white 
                rounded-xl p-2'>Delivery</p>
                <p className='p-2 text-white'>Pickup</p>
            </div>
        </div>

            <div className=' bg-gray-200 rounded-full flex items-center
            px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={20}/>
                <input className='bg-transparent 
                focus:outline-none p-2 w-full ' type='text'
                placeholder='Search food' />
            </div>
            <button className=' bg-black text-white hidden
            md:flex items-center py-2 rounded-xl flex'>
                <BsFillCartFill/> cart
            </button>
        {nav ? <div 
        className=' bg-black/70 fixed h-screen w-full
        z-10 top-0 left-0'></div> : '' }

        <div className=
        {nav ? ' bg-white fixed top-0 left-0 z-10 w-[300px] h-screen duration-200':
        ' bg-white fixed top-0 left-[-100%] z-10 w-[300px] h-screen'}>
                <AiOutlineClose
                onClick={()=>setNav(!nav)}
                size={25}
                className='absolute right-4 top-4 cursor-pointer'/>
            <h1 className='text-2xl
             p-4 font-bold text-green-700'> AFRO <span
            className=' font-normal text-black'>Eats</span> 
            </h1>
            <nav>
                <ul className='p-4 flex flex-col text-gray-600'>
                    <li className='text-xl py-4 flex'><TbTruckDelivery 
                    size={25} className='mr-4'/> orders</li>
                    <li className='text-xl py-4 flex'><MdFavorite
                    size={25} className='mr-4'/>Favoites</li>
                    <li className='text-xl py-4 flex'><FaWallet
                    size={25} className='mr-4'/> Wallet</li>
                    <li className='text-xl py-4 flex'><MdHelp
                    size={25} className='mr-4'/> Help</li>
                    <li className='text-xl py-4 flex'><AiFillTag
                    size={25} className='mr-4'/> Help</li>
                    <li className='text-xl py-4 flex'><FaUserFriends
                    size={25} className='mr-4'/> Invite Friends</li>
                </ul>
            </nav>

            </div>
        </div>

    

  )
}

export default Navbar