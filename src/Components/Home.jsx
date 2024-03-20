import React from "react";

function Home() {

  const inputList = [
    {
      "name": "Name",
      "placeholder" : "",
      "value":"Vanessa Mint"
    },
    {
      "name": "Email Address",
      "placeholder": "",
      "value":"vanessamint@|"
    },
    {
      "name" : "Phone Number",
      "subname" : "This field is required",
      "placeholder" : "e.g. +1 234 567 890",
      "value": ""
    }
  ];

const numberInput = [
  {
    "number": "1",
    "step" : "step 1",
    "title" : "your info",
    "type": "first"
  },
  {
    "number": "2",
    "step" : "step 2",
    "title" : "select plan",
    "type" : "second"
  },
  {
    "number": "3",
    "step" : "step 3",
    "title" : "adds-ons",
    "type" : "third"
  },
  {
    "number": "4",
    "step" : "step 4",
    "title" : "summary",
    "type": "fourth"
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
    <div className="p-4 bg-white ml-72 text-sm rounded-xl">
      <div className="flex gap-2">
        <div className="relative">
          <img src="../images/bg-sidebar-desktop.svg" alt="" />
          <div className="absolute top-0">
            { numberInput.map((numb, index) => (
                <div className="flex" key={index}>
                  <div className="w-10 rounded-full items-center gap-10 border border-red-200">
                  <p className="">{numb.number}</p>
                  </div>
                  <div>
                    <p className="uppercase">{numb.step}</p>
                    <h2 className="uppercase">{numb.title}</h2>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className="">
          {/* <div action="" className="p-14 w-96">
            <h2 className="text-2xl font-medium text-MarineBlue">Personal info</h2>
            <p className="text-LightGray mb-10">Please provide your name, email address, and phone number.</p>
            { inputList.map((inputs, index) => (
              
              <div className="mt-6" key={index}>
                <label for="">{inputs.name}</label>
                <input type="text" value={inputs.value} placeholder={inputs.placeholder} className="p-2 rounded-md"/> 
            </div>
              ))}
          </div> */}
          <div className="p-14 ">
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
              {/* <img src="../images/icon-thank-you.svg" alt="" /> */}
              <p className="text-LightGray">Yearly</p>
            </div>
          <div className="mt-20 flex flex-row gap-20 justify-between">
            <button>Go back</button>
            <button className="w-32 p-2 bg-MarineBlue text-White rounded-md">Next Step</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
