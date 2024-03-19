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
      "value":"vanessamint@"
    },
    {
      "name" : "Phone Number",
      "subname" : "This field is required",
      "placeholder" : "e.g. +1 234 567 890",
      "value": ""
    }
  ]

  return (
    <div className="p-4 w-3/5 bg-white ml-72 mt-20 rounded-xl">
      <div className="flex h-auto">
        <div className=" bg-white w-4/5 ">
          <img src="../images/bg-sidebar-desktop.svg" alt="" />
        </div>
        <div className="p-24 bg-white">
          <form action="" className="bg-white">
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            { inputList.map((inputs, index) => (
              
              <div className="" key={index}>
              <label for="">{inputs.name}</label>
              <input type="text" value={inputs.value} /> 
            </div>
              ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
