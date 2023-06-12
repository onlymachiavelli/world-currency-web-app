import  * as React from 'react'
import {MoneyBag,
    Down
} from './icons'
/*

Select={{
          vl : 1, 
          func : setSel
        }}
*/
const Block = ({...props}) =>{
    if (!props.Datas) return (
        <></>
    )
    return (
        <div className="w-7/12 h-auto p-10 bg-blueSky rounded-2xl">

            <div className="flex w-full items-center  gap-4 pb-4">
                <div className="w-20 h-14  bg-cover no-repeat border-2 border-[#f79423]" style={{
                    //bg image 
                    backgroundImage: `url('https://flagcdn.com/w80/${ props.Datas ? props.Datas[0].iso1.toLowerCase() :"tn"}.png')`,
                }}></div>
                <p className="text-white font-bold">
                    {

                        props.Datas[0].name + " " + props.Datas[0].currency
                    }
                </p>
            </div>


            <div className="w-full h-auto flex items-center justify-center bg-white p-3 rounded">
                <MoneyBag Width="25"/>
                <input type="number" className="outline-none w-11/12 pl-5" placeholder="Enter Amount"
                    value={
                        props.Values.val
                    }
                    onChange={(e)=>{
                        props.Values.func(e.target.value)
                    }}
                />
            </div>

            <div className="flex items-center justify-center pt-5">
                <button title="Change Currency" onClick={()=>{
                    props.World("flex")
                    props.Select.func(props.Select.vl)
                }}>
                    <Down Width="40"/>
                </button>
            </div>
        </div>
    )
}

export default Block