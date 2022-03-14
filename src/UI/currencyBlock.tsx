import React, { useState } from "react"
import {MoneyBag} from './SVG'
const CurrBlock = ({...props}) => {
    
    return (
        <div className=' justify-center items-center bg-blueSky w-2/5 h-auto p-5 rounded-lg pb-7'>
            <div className='flex items-center'>
                <img src={props.Flag} width={"60"} height="auto" className='rounded-lg' />
                <p className='text-white font-bold ml-2'>
                    Hello
                </p>
            </div>
            <div className='flex justify-center items-center bg-white p-2 mt-4'>
                <MoneyBag Width="17" Height="19" />
                <input type={"text"} className='outline-0 text-center text-blue w-4/5 font-bold bg-transparent'/>
            </div>
        </div>
    )
}

export default CurrBlock