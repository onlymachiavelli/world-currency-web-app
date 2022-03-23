import React, { useState } from "react"
import { MoneyBag, Down } from "./SVG"
const CurrBlock = ({ ...props }) => {
  console.log("country name", props.CountryName)

  return (
    <div className=" justify-center items-center bg-blueSky md:w-3/5 h-auto p-5 rounded-lg pb-7 w-11/12">
      <div className="flex items-center">
        <div className=" block w-11 h-9 rounded-ms ">
          <img src={props.Flag} className="w-11 h-8 border border-white" />
        </div>
        <p className="text-white font-bold ml-2">{props.CountryName}</p>
      </div>
      <div className="flex justify-center items-center bg-white p-2 mt-4 border border-blue">
        <MoneyBag Width="17" Height="19" />
        <input
          type={"text"}
          value={props.inputValue}
          className="outline-0 text-center text-blue w-full font-bold bg-transparent"
          onChange={props.onChange}
        />
      </div>
      <button className="block m-auto mt-3">
        <Down Width="25" Height="25" />
      </button>
    </div>
  )
}

export default CurrBlock