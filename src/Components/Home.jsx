import React from "react";
import { Link } from "react-router-dom";

function Home() {

  const inputList = [
    {
      "name": "Name",
      "placeholder" : "e.g. Stephen King",
    },
    {
      "name": "Email Address",
      "placeholder": "e.g. stephenking@lorem.com",
    },
    {
      "name" : "Phone Number",
      "subname" : "This field is required",
      "placeholder" : "e.g. +1 234 567 890",
    }
  ];

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
      <div className="flex gap-2">
        <div className="relative">
          <div className="h-full p-4">
            <img src="../images/bg-sidebar-desktop.svg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute top-10 left-4">
            { numberInput.map((numb, index) => (
              <Link to={numb.link} key={index}>
                <div className="flex p-2" >
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
        <div className="p-12">
            <h2 className="text-2xl font-medium text-MarineBlue">Personal info</h2>
            <p className="text-LightGray mb-10">Please provide your name, email address, and phone number.</p>
            { inputList.map((inputs, index) => (              
              <div className="mt-6 flex-rows-1 text-MarineBlue" key={index}>
                <label for="" className="font-semibold">{inputs.name}</label><br />
                <input type="text" placeholder={inputs.placeholder} className="p-2 border-CoolGray rounded-md"/> 
            </div>
              ))}
               <div className="mt-20 mr-5 flex justify-end">
            <Link to={'/select'}><button className="w-32 p-2 bg-MarineBlue text-White rounded-md">Next Step</button></Link>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
