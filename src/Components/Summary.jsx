import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Summary = () => {

  const [isVisible, setIsVisible ] = useState(false);

    const numberInput = [
        {
          "number": "1",
          "step" : "step 1",
          "title" : "your info",
          "link": "/"
        },
        {
          "number": "2",
          "step" : "step 2",
          "title" : "select plan",
          "link" : "/select"
        },
        {
          "number": "3",
          "step" : "step 3",
          "title" : "adds-ons",
          "link" : "/add-ons"
        },
        {
          "number": "4",
          "step" : "step 4",
          "title" : "summary",
          "link": "/summary"
        },
      ]
  return (
    <div className="bg-white max-w-[700px] mx-auto my-auto text-sm rounded-xl text-Magnolia">
      <div className="flex gap-2 ">
        <div className="relative">
          <div className='h-full p-4'>
            <img src="../images/bg-sidebar-desktop.svg" className='h-full w-full object-cover' alt="" />
          </div>
          <div className="absolute top-10 left-4">
            { numberInput.map((numb, index) => (
              <Link to={numb.link} key={index}>
                <div className="flex p-2">
                  <div className="w-10 h-10 border-[1.5px] border-Magnolia rounded-full hover:bg-Magnolia">
                  <p className="p-2 ml-2 font-medium hover:text-MarineBlue">{numb.number}</p>
                  </div>
                  <div className="ml-3">
                    <p className="uppercase text-[12px]">{numb.step}</p>
                    <h2 className="uppercase font-medium">{numb.title}</h2>
                  </div>
                </div>
                </Link>
            ))}
          </div>
        </div>
        {/*  */}
        {/* Finish div */}
        <div id='finish' className='p-4 my-auto w-[500px]'>
            <div className=''>
                <h2 className='text-2xl font-medium text-MarineBlue'>Finishing up</h2>
                <p className='text-CoolGray'>Double-check everything looks OK before confirming.</p>
            </div>
            <div className='mt-10 p-5 bg-Magnolia rounded-md'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-MarineBlue font-semibold'>Arcade (Monthly)</p>
                        <span className='underline font-medium hover:text-PurplishBlue text-PurplishBlue'>Change</span>
                    </div>
                    <div>
                        <p className='text-MarineBlue font-semibold'>$9/mo</p>
                    </div>
                </div>
                <div className='mt-4 border border-CoolGray'></div>
                <div className='mt-4 flex justify-between'>
                    <p className='text-CoolGray'>Online service</p>
                    <span className='text-CoolGray'>$2/mo</span>
                </div>
            </div>
            <div className='p-2 flex justify-between'>
            <p className='text-CoolGray'>Total(per month)</p>
                <span className='text-PurplishBlue text-lg font-semibold'>+$12/mo</span>
            </div>
            <div className="mt-14 flex flex-row gap-20 justify-between">
              <Link to={'/add-ons'}><button className="text-CoolGray">Go back</button></Link>
              <button
              onClick={() => setIsVisible(isVisible)}
              className="w-24 p-2 bg-PurplishBlue text-White rounded-md  hover:opacity-50">
                Confirm
              </button>
            </div> 
        </div>
        {/* Summary div*/}
        { isVisible && <p className='text-red-600 '>Show/Hide this div</p>}
        {/* <div id='summary' className='hidden my-auto border border-red-500'>
          <div className='p-4 items-center mx-auto my-auto text-CoolGray'>
          <div className='relative flex items-center justify-center bg-StrawberryRed w-16 h-16 mx-auto rounded-full'>
            <div className='relative bg-green-300 w-9 h-9 rounded-full '>
            <img src="../images/icon-checkmark.svg" alt="" width={20} height={20} className='mx-auto mt-3 bg-cover' />
            </div>
          </div>
            <div className='mt-8'>
              <h2 className='text-2xl font-semibold text-MarineBlue text-center'>Thank you!</h2>
              <span className='flex text-center max-w-[500px]'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</span></div>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Summary