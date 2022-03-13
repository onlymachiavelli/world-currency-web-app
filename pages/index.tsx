import React, {useState, useEffect} from 'react' 
import Navbar from '../src/UI/Navbar'
import callCurrency from '../src/apiCall/currencycall'
import Head from 'next/head'
const Home = () =>{
  

  return (
    <main className='w-full h-screen'>
      <Head>
        <title>Currency Converter</title>
      </Head>
      <Navbar/>
      <p className='text-center text-white font-bold mt-4'>Converting World Wide Currencies and CryptoCurrencies</p>
    </main>
  )
}

export default Home