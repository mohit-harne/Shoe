import React from 'react'
import menshoe1a from '../images/menshoe1a.png'
import menshoe2a from '../images/menshoe2a.png'
import menshoe3a from '../images/menshoe3a.png'
import Slider from './Slider'
const Favorate = () => {
  return (
    <div className='bg-black lg:h-[1400px] md:h-[445px] h-[520px] pt-[100px] p-6 text-white'>
        <h1 className='text-3xl ml-10 font-semibold '>Favorites</h1> <br/><br/>
        <div className='flex ml-10 gap-10'>
<h1 className='text-[19px] font-semibold'>Profile</h1>
<h1 className='text-[19px] font-semibold'>Orders</h1>
<h1 className='text-[19px] font-semibold'>Favorites</h1>
<h1 className='text-[19px] font-semibold'>Inbox</h1>
<h1 className='text-[19px] font-semibold'>Settings</h1> 
<button className='text-[19px] font-semibold bg-transparent border-2 border-gray-400 hover:border-red-700 py-2 px-4 rounded-2xl ml-[820px]'>Edit</button>
        </div><br/><br/>
        <div className='flex gap-6 ml-5'>
            <div className=''>
                <img className='h-[458px] w-[458px]' src={menshoe1a} alt='M'/> <br/>
                <h1 className='text-[19px] font-semibold'>Air Jordan 1 Low SE <span className='font-normal ml-[218px]'>$125.00</span></h1>
                <h1 className='text-[19px] font-semibold text-gray-400'>Men's Shoes</h1> <br/>
                <button className='text-[16px] font-semibold bg-transparent border-2 border-gray-400 py-3 px-6 rounded-full hover:border-red-700'>Select Size</button>
            </div>
            <div className=''>
                <img className='h-[458px] w-[458px]' src={menshoe2a} alt='M'/> <br/>
                <h1 className='text-[19px] font-semibold'>Air Jordan 1 Low SE <span className='font-normal ml-[218px]'>$125.00</span></h1>
                <h1 className='text-[19px] font-semibold text-gray-400'>Men's Shoes</h1> <br/>
                <button className='text-[16px] font-semibold bg-transparent border-2 border-gray-400 py-3 px-6 rounded-full hover:border-red-700'>Select Size</button>
            </div>
            <div className=''>
                <img className='h-[458px] w-[458px]' src={menshoe3a} alt='M'/> <br/>
                <h1 className='text-[19px] font-semibold'>Air Jordan 1 Low SE <span className='font-normal ml-[218px]'>$125.00</span></h1>
                <h1 className='text-[19px] font-semibold text-gray-400'>Men's Shoes</h1> <br/>
                <button className='text-[16px] font-semibold bg-transparent border-2 border-gray-400 py-3 px-6 rounded-full hover:border-red-700'>Select Size</button>
            </div>
            
        </div> <br/><br/><br/><br/><br/>
        <h1 className='text-3xl ml-10 font-semibold '>Find Your Next Favorite</h1> <br/><br/>
        <Slider/>
        </div>
  )
}

export default Favorate