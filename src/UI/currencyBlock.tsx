import React, { useState } from "react"
import {MoneyBag, Down} from './SVG'
const CurrBlock = ({...props}) => {
    
    return (
        <div className=' justify-center items-center bg-blueSky w-2/5 h-auto p-5 rounded-lg pb-7'>
            <div className='flex items-center'>
                <div className=' block w-11 h-9 rounded-ms '>
                <img src={props.Flag}  className='w-11 h-8'  />
                </div>
                <p className='text-white font-bold ml-2'>
                    {props.CountryName}
                </p>
            </div>
            <div className='flex justify-center items-center bg-white p-2 mt-4'>
                <MoneyBag Width="17" Height="19" />
                <input type={"text"} className='outline-0 text-center text-blue w-4/5 font-bold bg-transparent'/>
            </div>
            <button className='block m-auto mt-3'>
                <Down Width="25" Height="25" />
            </button>
        </div>
    )
}

export default CurrBlock