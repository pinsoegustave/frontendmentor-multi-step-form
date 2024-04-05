import classNames from 'classnames';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SelectPlan = () => {
    const [ isSelected, setIsSelected ] = useState(false);

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
      const plans = [
        {
          "icon": "../images/icon-arcade.svg",
          "name" : "Arcade",
          "money" : "$9/mo" 
        },
        {
          "icon":"../images/icon-advanced.svg",
          "name" : "Advanced",
          "money" : "$12/mo" 
        },
        {
          "icon":"../images/icon-pro.svg",
          "name" : "Pro",
          "money" : "$15/mo" 
        },
      ]
  return (
    <div className="bg-white max-w-[700px] mx-auto my-auto text-sm rounded-xl text-Magnolia">
      <div className="flex gap-2">
        <div className="relative">
          <div className='h-full p-4'>
            <img src="../images/bg-sidebar-desktop.svg" alt="" />
          </div>
          <div className="absolute top-10 left-4 cursor-pointer">
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
        
        <div className="p-2 mt-8 my-auto">
          <div className="items-center mx-auto my-auto text-CoolGray">
            <h2 className="text-2xl font-medium text-MarineBlue">Select your plan</h2>
            <p className="text-LightGray mb-10">Your have the option of monthly or yearly billing.</p>
            <div className="flex gap-4">
            { plans.map((plan, index) => (
              
              <div className="" key={index}>
                <div className="p-4 w-32 border-2 border-LightGray rounded-lg">
                  <img src={plan.icon} alt="" />
                  <div className="mt-10">
                  <p className="font-bold text-MarineBlue">{plan.name}</p>
                  <span className="text-LightGray">{plan.money}</span>
                  </div>
                </div>
            </div>
              ))}
            </div>
            <div className="p-4 mt-10 flex bg-slate-100 rounded-md justify-center gap-4 font-bold text-MarineBlue">
              <p>Monthly</p>
              <div
              onClick={() => setIsSelected(!isSelected)}
              className={classNames('flex w-10 h-5 bg-gray-600 rounded-full transition-all duration-500', {
                  'bg-green-400' : isSelected,
              })}>
                <span className={classNames('w-3 h-3 ml-1 my-auto bg-white rounded-full transition-all duration-500 shadow-lg', {
                  'ml-6' : isSelected,
                })}></span> 
              </div>
              <p className="text-LightGray">Yearly</p>
            </div>
          <div className="mt-10 flex flex-row gap-20 justify-between">
            <Link to={'/'}><button className="text-LightGray">Go back</button></Link>
            <Link to={'/add-ons'}><button className="w-32 p-2 bg-MarineBlue text-White rounded-md">Next Step</button></Link>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default SelectPlan