import React from 'react'
import { Footer } from 'flowbite-react';
import search from '../images/search.png'
import fb from '../images/fb.png'
import tiktok from '../images/tiktok.png'
import insta from '../images/insta.png'
const End = () => {
  return (
    <div>
        <Footer container className='bg-black rounded-none  w-[100%] shadow-none '>
      <div className="w-full text-center mt-[50px] lg:mt-[100px] md:mt-[100px]">
        <div className="w-full  justify-between sm:flex sm:items-start sm:justify-between">
        <h1 className="text-2xl text-red-700 ml-[-80px] lg:ml-[-80px] md:ml-[-100px]">
            <span className="text-white ml-24">SNEA</span>KISS
          </h1>
          <Footer.LinkGroup className='ml-[50px] leading-[50px] lg:leading-7 md:leading-7 text-white'>
            <Footer.Link  href="/" >HOME</Footer.Link>
            <Footer.Link href="/Men" >MEN</Footer.Link>
            <Footer.Link href="/Women" >WOMEN</Footer.Link>
            <Footer.Link href="/Collection" >COLLECTION</Footer.Link>
            <Footer.Link href="/Contact" >CONTACT US</Footer.Link>
            <Footer.Link href="/aboutus" >ABOUT US</Footer.Link>
            <Footer.Link href="#" className='ml-[80px] lg:ml-[430px] md:ml-[70px] lg:mt-[0px] md:mt-[0px] mt-[10px]'><img className='h-[26px] w-[26px]' src={fb} alt='M'/></Footer.Link>
            <Footer.Link href="#" className='mt-[10px] lg:mt-[0px] md:mt-[0px]'><img className='h-[26px] w-[26px]' src={insta} alt='M'/></Footer.Link>
            <Footer.Link href="#" className='mt-[10px] lg:mt-[0px] md:mt-[0px]'><img className='h-[26px] w-[26px]' src={tiktok} alt='M'/></Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <div className='grid grid-auto-fit items-center lg:ml-[300px] '>
        <input
              className=" focus-within:border-2 border-blue-500  lg:h-[55px] lg:w-[800px] md:h-[55px] md:w-[600px] md:ml-[90px] ml-[20px] h-[40px] w-[300px] lg:ml-[0px] rounded-full text-white  border-0 bg-[#272731]"
              type="text"
              placeholder="SEARCH HERE"
              
            />
            <img className='DUNK bg-red-700 p-4 rounded-[50%] lg:h-[65px] w-[48px] h-[48px] lg:w-[65px] md:h-[65px] md:w-[65px] lg:ml-[150px] md:ml-[230px] ml-[270px] mt-[-45px] lg:mt-[0px] md:mt-[0px] hover:cursor-pointer' src={search} alt='M'/>
            </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="SNEAKISS™ 2023 ALL RIGHTS RESERVED" year={2022} />
      </div>
    </Footer>
    </div>
  )
}

export default End