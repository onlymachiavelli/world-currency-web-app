import React, {useState, useEffect} from 'react' 
import Navbar from '../src/UI/Navbar'
import callCurrency from '../src/apiCall/currencycall'

const Home = () =>{
  

  return (
    <main className='w-full h-screen'>
      <Navbar/>
    </main>
  )
}

export default Home