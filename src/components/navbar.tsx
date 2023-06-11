import * as React from 'react'
import Link from 'next/link'

import {
    Logo, 
    
} from './icons'
const Navbar = ({...props}) =>{
    return (
        <header className="w-full h-auto p-5"> 

            <nav className="tab:flex tab:items-center tab:gap-4">
                <div className="flex items-center justify-between">
                    <Link href={""}>
                        <Logo Width="200"/>
                    </Link>
                    <button className="text-white tab:hidden" onClick={()=>{
                        props.Menu == "hidden" ? props.onSet("flex") : props.onSet("hidden")
                    }}>
                        Menu
                    </button>
                </div>

                <nav className={`w-full ${props.Menu} py-10 tab:py-0 tab:block flex-wrap flex-col gap-4 tab:space-x-4 bg-[#000000e1] h-screen top-0 left-0 w-1/2 fixed pl-10 rounded  tab:relative tab:bg-blue tab:h-auto tab:pl-0 tab:rounded-none`}>
                    <Link href="" className='text-white text-sm'>Home</Link>
                    <Link href="" className='text-white text-sm'>API Ressources</Link>
                    <Link href="" className='text-white text-sm'>Code Source</Link>
                    <Link href="" className='text-white text-sm'>Contact US</Link>
                    <Link href="" className='text-white text-sm'>About</Link>
                    
                </nav>


                
            </nav>
        </header>
    )
}

export default Navbar


/*
        <header className="w-full h-auto p-5 "> 

            <nav className="flex gap-2 items-center">
                <div className="flex items-center justify-between">
                    <Link href={""}>
                        <Logo Width="200"/>
                    </Link>
                    <button className="text-white hidden ">
                        Menu
                    </button>
                </div>

                <nav className="w-full mt-1">
                    <Link href="" className='text-white text-sm px-2'>Home</Link>
                    <Link href="" className='text-white text-sm px-2'>API Ressources</Link>
                    <Link href="" className='text-white text-sm px-2'>Code Source</Link>
                    <Link href="" className='text-white text-sm px-2'>Contact US</Link>
                    <Link href="" className='text-white text-sm px-2'>About</Link>
                    
                </nav>


                
            </nav>
        </header>




        926
*/