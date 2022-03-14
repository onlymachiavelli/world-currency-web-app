import React, {useState, useEffect} from 'react' 
import Navbar from '../src/UI/Navbar'
import callCurrency from '../src/apiCall/currencycall'
import Head from 'next/head'
import { Block } from './../src/UI/currencyBlock'
const Home = () =>{
  

  return (
    <main className='w-full h-screen'>
      <Head>
        <title>Currency Converter</title>
      </Head>
      <Navbar/>
      <p className='text-center text-white font-bold mt-4'>Converting World Wide Currencies and CryptoCurrencies</p>
      <div className='w-4/5 h-6 bg-blue2 m-auto mt-7 rounded-lg pt-2 pl-2 pb-10'>
        <Block/>
      </div>
    </main>
  )
}

export default Home