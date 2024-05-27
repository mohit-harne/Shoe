import React from 'react'
import nikevideo from '../images/nikevideo.mp4'
import meditate from '../images/meditate.png'
import grouppic from '../images/grouppic.png'
import kids from '../images/kids.png'
import news1 from '../images/news1.png'
import news2 from '../images/news2.png'
import news3 from '../images/news3.png'
import '../App.css'
const Aboutus = () => {
    
  return (
    <div className='bg-black pt-[0px] lg:h-[4580px] md:h-[445px] h-[520px] grid grid-cols-1 place-items-center gap-6'>
      
     <div className='grid grid-cols-1  pt-[300px] m-0   '> <video className="SCROLL overflow-y-scroll hide-scrollbar opacity-[80%]  bg-green-500 h-[360px] scale-[235%]  rounded-lg " width="640" height="360"  autoPlay loop>
        <source src={nikevideo} type="video/mp4" />
        
        Your browser does not support the video tag.
      </video>
      
    <h1 className='text-[160px] opacity-[90%] ml-[-430px] font-extrabold w-[99%]  mt-[-700px]  font-serif absolute 
     text-white tracking-wide leading-[150px] SCROLL h-[1300px] overflow-y-scroll hide-scrollbar scroll-smooth  '><br/><br/> <br/><br/><br/><span className='text-2xl'> Our Mission</span> <br/>BRING <br/>INSPIRATION<br/> AND<br/> INNOVATION<br/> TO<br/> EVERY<br/> ATHELETE*<br/> IN THE<br/> WORLD<br/><span className='text-2xl italic'> *If you have a body, you are an athlete
     </span><br/><br/><br/><br/></h1>
  
      </div>

      <div className='text-white text-6xl text-left font-extrabold font-serif pl-[600px] pr-[90px] mt-[300px] leading-[70px] '>
      We champion continual progress for athletes and sport by taking action to help athletes reach their potential. Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
      </div>
      <div className='grid grid-cols-2 p-10 mt-10'>
               <div>
                     <h1 className='text-white text-5xl font-semibold w-[70%] '>Stories, volume 3: 
                         All Movement, All
                            Moments</h1>
                     <button className="pt-2 pr-6 pl-1 pb-2 hover:underline text-gray-600 text-2xl ">
                     Explore the latest stories &gt;
            </button>
               </div>
<img className='scale-[130%] ml-[-100px] mt-[50px]' src={meditate} alt='M'/>
      </div>
      <div className='grid grid-cols-2 p-10 mt-14'>
      <img className='scale-[130%] ml-[100px] mt-[70px]' src={grouppic} alt='M'/>
               <div>
               
                     <h1 className='text-white text-5xl  font-semibold pl-[270px] '>NIKE, Inc: Keeping
                                                                            athletes at the
                                                                            center of everything
                                                                            we do.</h1>  
                                                                            <button className="pt-2 pr-6 pl-1 pb-2 ml-[270px] hover:underline text-gray-600 text-2xl ">
                                                                            Learn more about NIKE, Inc. &gt;
            </button>    
               </div>

      </div>
      <div className='grid grid-cols-2 p-10 mt-14'>
               <div>
                     <h1 className='text-white text-5xl font-semibold w-[60%] '>Our Impact:
                                                                                    Breaking Barriers
                                                                                    Since 1972</h1>
                     <button className="pt-2 pr-6 pl-1 pb-2 hover:underline text-gray-600 text-2xl ">
                     Learn more &gt;
            </button>
               </div>
<img className='scale-[130%] ml-[-100px] mt-[50px]' src={kids} alt='M'/>
      </div>
      <div className='text-left text-8xl text-white pl-[480px] p-14 font-bold mt-[50px]'>
      The latest from the NIKE, Inc. Newsroom:
      </div>
      <div className='grid grid-cols-3 p-10 gap-6'>
<div>
    <img src={news1} alt='M'/>
    <h1 className='text-white text-3xl'>Nike's National Federation Kits Bring
Dri-FIT ADV to the Pitch</h1>
</div>

<div>
    <img src={news2} alt='M'/>
    <h1 className='text-white text-3xl'>Nike Air Max Dn: The Next Era of Air</h1>
</div>

<div>
    <img src={news3} alt='M'/>
    <h1 className='text-white text-2xl font-semibold'>Through the Power of Community, NIKE,
Inc. Advance Toward a Better World for
All</h1>
</div>


      </div>
      </div>
  )
}

export default Aboutus