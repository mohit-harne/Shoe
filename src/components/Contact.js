import React, { useState } from 'react';
import "../App.css";
import iphone from '../images/iphone.png'
import chat from '../images/chat.png'
import location from '../images/location.png'
import mail from '../images/mail.png'

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      setIsFocused(false);
    }
  };

  return (
    <div className='bg-black lg:h-[1450px] md:h-[445px] h-[520px] flex flex-col  pt-[100px] '>
     
      <div className="relative ml-[550px]">
      <h1 className='text-4xl text-white ml-[110px]'>GET HELP</h1> <br/>
        <input
           className={`border h-12 w-[400px] rounded-lg text-white border-gray-300 focus:border-blue-500 focus:outline-none bg-transparent pl-5 pr-5`}
          type="text"
          placeholder={isFocused ? '' : 'SEARCH HERE'}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isFocused && (
          <span
            className="search-label"
          >
            SEARCH HERE
          </span>
        )}
      </div> <br/><br/><br/><br/>
      <div className='px-[100px] '>
      <h1 className='text-2xl font-semibold text-white'>Quick assists</h1>
      <h1 className='text-[18px]  text-white'>Answers to our most frequently asked questions are just one click away.</h1>
      <div className="border-t border-gray-300 my-5 "></div> <br/>
      <div className='grid grid-flow-col grid-cols-3 grid-rows-2 gap-y-6 text-white '> {/*6 div*/}
           <div className='leading-[32px] text-[17.5px] '>
            <h1 className='font-semibold '>Dispatch & delivery</h1>
            <button >What are Nike's delivery options?</button>
            <button>Can my Nike order be dispatched internationally?</button>
            <button>Does my Nike order need to clear customs?</button>
           </div>
           <div className='leading-[32px] text-[17.5px]'>
            <h1 className='font-semibold '>Returns</h1>
            <button >How do I return my Nike order?</button>
            <button>What is Nike's returns policy?</button>
            <button>Where is my refund?</button>
           </div>
           <div className='leading-[32px] text-[17.5px]'>
            <h1 className='font-semibold '>Nike Membership</h1>
            <button >What is Nike Membership?</button>
            <button>How do I become a Nike Member?</button>
            <button>How do I get the most out of NRC and NTC?</button>
           </div>
           <div className='leading-[32px] text-[17.5px]'>
            <h1 className='font-semibold '>Orders</h1>
            <button >Where is my Nike order?</button>
            <button>Can I cancel or change my Nike order?</button>
            <button>What are Nike's payment options?</button>
           </div>
           <div className='leading-[32px] text-[17.5px]'>
            <h1 className='font-semibold '>Product info</h1>
            <button >How do I get Nike's newest sneaker releases?</button>
            <button>How do I find the right size and fit?</button>
            <button>What is the Nike By You personalisation policy?</button>
            <button>Do Nike shoes have a warranty?</button>
           </div>
           <div className='leading-[32px] text-[17.5px]'>
            <h1 className='font-semibold '>Corporate</h1>
            <button >Where can I learn more about Nike, Inc.?</button>
            <button>Where is the Nike store closest to me?</button>
            
           </div>
      </div>
      
      </div> <br/><br/><br/><br/>
      <div className='px-[100px] '>
      <h1 className='text-2xl font-semibold text-white'>Contact us</h1>
      
      <div className="border-t border-gray-300 my-5 "></div>
      <div className='grid grid-flow-col grid-rows-2 grid-cols-3 grid-auto-fit  gap-y-6  text-white '> {/*4 div*/}
           <div className='leading-[28px] content-center  grid-flow-row grid justify-center  text-[17.5px] '>
            <img className='h-[50px] w-[50px] ml-9 invert' src={chat} alt='M'/> <br/>
            <button >24 hours a day</button>
            <button>7 days a week</button>
           </div>

           <div className='leading-[28px] content-center grid-flow-row grid justify-center  text-[17.5px] '>
           <br/><br/>  <img className='h-[50px] w-[50px] ml-[200px] invert' src={iphone} alt='M'/> <br/>
            <button >000 800 919 0566</button>
            <button>Products & Orders: 03:30 - 21:30, 7 days a week
Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</button>
           </div>

           

           <div className='leading-[28px] content-center   grid-flow-row grid justify-center  text-[17.5px] '>
            <img className='h-[50px] w-[50px] ml-11 invert' src={mail} alt='M'/> <br/>
            <button >We'll reply within</button>
            <button>five business days</button>
           </div>

           <div className='leading-[28px] content-center   grid-flow-row grid justify-center  text-[17.5px] '></div>

           <div className='leading-[28px] content-center   grid-flow-row grid justify-center  text-[17.5px] '>
            <img className='h-[50px] w-[50px] ml-5 invert mt-[-20px]' src={location} alt='M'/> <br/>
            <button >Store locator</button>
           
           </div>

           <div className='leading-[28px] content-center   grid-flow-row grid justify-center  text-[17.5px] '> </div>

           
           
      </div></div>
    </div>
  )
}

export default Contact;
