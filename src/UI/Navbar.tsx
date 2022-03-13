import React, {} from 'react'
import Link from 'next/link'
import {Logo} from './SVG'

const Navbar = () =>{
    return (
        <nav className='w-full pt-3.5 grid'>
            <div className=''>
                <Link href="/">
                    <Logo Width="170" Height="30" />
                </Link>
            </div> 
            <nav className=''>
                <Link href="/">Home</Link>
                <Link href="">API</Link>
                <Link href="">About</Link>
            </nav>
        </nav>
    ) 

}


export default Navbar