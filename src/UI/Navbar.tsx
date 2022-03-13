import React, {} from 'react'
import Link from 'next/link'
import {Logo, Instagram, Twitter, Linkedin, Github} from './SVG'

const Navbar = () =>{
    return (
        <nav className='flex w-full p-2 items-center'>
            <div className=''>
                <Link href="/">
                    <Logo Width="170" Height="30" />
                </Link>
            </div> 
            <nav className='flex gap-3 ml-7 mt-1.5' >
                <Link href="/">
                    <a className='link'>Home</a>
                </Link>
                <Link href="/">
                    <a className='link'>API</a>
                </Link>
                <Link href="/">
                    <a className='link'>Contact</a>
                </Link>
                <Link href="/">
                    <a className='link'>About</a>
                </Link>
            </nav>
            <div className='flex absolute right-2 gap-2 mt-2'>
                <a href="https://www.github.com/onlymachiavelli/" target={"_blank"}><Github Width="15" Height="15" /></a>
                <a href="https://www.twitter.com/onlymachiavelli/" target={"_blank"}><Twitter Width="15" Height="15" /></a>
                <a href="https://www.instagram.com/onlymachiavelli/" target={"_blank"}><Instagram Width="15" Height="15" /></a>
                <a href="https://www.linkedin.com/in/alaa-ddin-472a651b9/" target={"_blank"}><Linkedin Width="15" Height="15" /></a>
            </div>
        </nav>
    ) 

}


export default Navbar