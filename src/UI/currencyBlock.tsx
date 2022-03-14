import React, { useState } from "react"
import {MoneyBag} from './SVG'
const CurrBlock = ({...props}) => {
    
    return (
        <div className=''>
            <div>
                <MoneyBag Width="20" Height="23" />
                <input type={"text"} className='outline-0 p-1 text-center text-blue font-bold'/>
            </div>
        </div>
    )
}

export default CurrBlock