import React from 'react'
import shoe9 from '../images/shoe9.png'
import shoe10 from '../images/shoe10.png'
import shoe11 from '../images/shoe11.png'
import shoe12 from '../images/shoe12.png'
import shoe13 from '../images/shoe13.png'
import shoe14 from '../images/shoe14.png'
import shoe15 from '../images/shoe15.png'
import shoe16 from '../images/shoe16.png'
import shoe17 from '../images/shoe17.png'
import cart_white from '../images/cart_white.png'
import "../App.css";
const Home2 = () => {
  return (<div>
     <h1 className="text-3xl lg:text-5xl font-sans tracking-wide text-white font-bold text-center mt-[40px] md:mt-[40px] lg:mt-[-80px] ">
          FOR MENS
        </h1>
    <div className='text-white  grid grid-auto-fit gap-4 p-5  lg:pl-[210px] lg:pr-[230px] h-[1200px] md:h-[650px] lg:h-[350px] mt-[50px] '>
      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>SF AIR FORCE MID TRIPLE WHITE</h3>
        <h3>$30.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe9} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>AIR FORCE 1 HIGH 07 SNEAK</h3>
        <h3>$50.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe10} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>SNEAKERS SF AIR MAX FORCE 1</h3>
        <h3>$100.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe11} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>AIR FORCE AIR JORDAN NIKE</h3>
        <h3>$150.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe12} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>
    </div>
    <div className='grid grid-auto-fit grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-[-300px]  lg:mt-[0]  gap-4 lg:h-[600px] md:h-[700px] h-[1100px] w-[100%] p-4 lg:pl-[200px] lg:pr-[200px] pl-[-50px]  '>               {/*ELEVATE */}
    <div className="SNEAK flex flex-col text-white items-center text-center  lg:pl-14 mt-[160px] lg:text-left lg:items-start lg:mt-[0px] lg:ml-[00px] md:ml-[0px] md:mt-[170px]">
           <p className=' mt-44 text-red-700 font-semibold text-2xl'>ABOUT US</p>
            <h1 className="text-5xl font-semibold italic  leading-[50px] ">
             ELEVATE YOUR <br /> LOOK WITH&nbsp;
              <span className="font-extrabold text-red-700 text-6xl">
                  SHOES
              </span>{" "}
             
            </h1>
            <p className='text-[15px]'>
              FROM SNEAKERS TO STILET TO YOUR SHOE DESTINATION
              <br />EXPERIENCE COMFORT AND STYLE WITH OUR SHOES
            </p>
            <br />
            <div className='grid  grid-flow-col gap-2'>
            <button className="pt-2 pr-6 pl-6 pb-2 rounded-lg bg-red-700 hover:bg-red-950 text-[14px] ">
              SHOP NOW
            </button>
            <button className="pt-2 pr-6 pl-6 pb-2 hover:underline  ">
              LEARN MORE
            </button>
            </div>
            
            <br />
           
          </div>
     <div >
      <img className='shoeone lg:h-[250px] lg:w-[500px] md:mt-[400px] lg:mt-[160px] -rotate-45 opacity-[80%] hover:scale-110 transition-all duration-200 cursor-pointer' src={shoe17} alt='M'/>
     </div>
 </div>
 <h1 className="text-3xl lg:text-5xl font-sans tracking-wide text-white font-bold text-center mt-[40px] md:mt-[40px] lg:mt-[0px] "> {/*FOR WOMENS */}
          FOR WOMEN
        </h1>
    <div className='text-white  grid grid-auto-fit gap-4 p-5  lg:pl-[210px] lg:pr-[230px] h-[1200px] md:h-[650px] lg:h-[350px] mt-[50px] '>
      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'> AIR FORCE HIGH WTR 'PHANTOM'</h3>
        <h3>$30.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe13} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>W AIR FORCE 1 HIGH '07 MID LX</h3>
        <h3>$50.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe14} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>AIR FORCE 1 '07 SAN FRANCISCO</h3>
        <h3>$100.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe15} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>

      <div className='DUNK overflow-hidden  bg-[#272731] rounded-xl p-4 h-[280px] lg:h-[310px] md:h-[310px]'>
        <h3>NIKE AIR</h3>
        <h3 className='text-[22px] font-semibold italic'>AIR FORCE 1 MID TUNNEL WALK</h3>
        <h3>$150.00</h3>
        <img className='h-[110px] w-[190px] lg:mt-[15px] mt-[0] lg:ml-[0] md:ml-[0] ml-[50px] -rotate-[25deg]' src={shoe16} alt='M'/>
        <button className="pt-2 pr-4 pl-4 pb-8 w-[40%] rounded-2xl bg-red-700 hover:bg-red-950 text-[10px] ml-[280px] mt-[-5px] lg:ml-[185px] lg:mt-[5px] md:ml-[185px] md:mt-[18px]"><img src={cart_white} className="h-[25px] w-[25px] mt-[3px] " alt="M" /></button>
      </div>
    </div>
 </div>
  )
}

export default Home2