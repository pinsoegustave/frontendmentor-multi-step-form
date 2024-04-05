import React from "react";
import { Link } from "react-router-dom";

const PickAddons = () => {
  const numberInput = [
    {
      number: "1",
      step: "step 1",
      title: "your info",
      link: "/",
    },
    {
      number: "2",
      step: "step 2",
      title: "select plan",
      link: "/select",
    },
    {
      number: "3",
      step: "step 3",
      title: "adds-ons",
      link: "/add-ons",
    },
    {
      number: "4",
      step: "step 4",
      title: "summary",
      link: "/summary",
    },
  ];

  const addons = [
    {
      name: "Online Service",
      subname: "Access multiplayer games",
      worth: "+$1/mo",
      checked: "true",
    },
    {
      name: "Larger storage",
      subname: "Extra 1TB of cloud save",
      worth: "+$2/mo",
      checked: "true",
    },
    {
      name: "Customizable Profile",
      subname : "Custom theme on your profile",
      worth: "+$2/mo",
      checked: "false",
    },
  ];

  return (
    <div className="bg-white max-w-[700px] mx-auto my-auto text-sm rounded-xl text-Magnolia">
      <div className="flex gap-2 ">
        <div className="relative">
          <div className="h-full p-4">
            <img src="../images/bg-sidebar-desktop.svg"  className='h-full w-full object-cover' alt="" />
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
        <div className="p-4 my-auto">
          <div className="items-center w-[400px] mx-auto my-auto text-CoolGray">
            <h2 className="text-2xl font-medium text-MarineBlue">
              Pick add-ons
            </h2>
            <span className="text-LightGray">
              Add-ons help enhance your gaming experience.
            </span>

                <div className="mt-10">
                    { addons.map((adds, index) => (
                        <div className="p-4 flex items-center gap-4 border border-PurplishBlue bg-Alabaster mt-4 rounded-md" key={index}>
                            <div className="p-1 border border-CoolGray bg-PurplishBlue rounded-md">
                                <img src="../images/icon-checkmark.svg" alt="" className="" />
                            </div>
                            <div className="">
                                <h2 className="text-MarineBlue font-medium">{adds.name}</h2>
                                <p className="text-CoolGray">{adds.subname}</p>
                            </div>
                            <div className="">
                                <span className="text-PurplishBlue">{adds.worth}</span>
                            </div>
                        </div>
                    ))}
                </div>

            <div className="mt-16 flex flex-row gap-20 justify-between">
              <Link to={'/select'}><button className="text-LightGray">Go back</button></Link>
              <Link to={'/summary'}><button className="w-32 p-2 bg-MarineBlue text-White rounded-md">
                Next Step
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickAddons;
