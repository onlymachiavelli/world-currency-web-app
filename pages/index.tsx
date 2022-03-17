import React, {useState, useEffect} from 'react' 
import Navbar from '../src/UI/Navbar'
import callCurrency from '../src/apiCall/currencycall'
import callGeo from '../src/apiCall/location'
import Head from 'next/head'
import  CurrBlock  from './../src/UI/currencyBlock'
import useConverter from '../src/hook/useConverter'
const Home = () =>{
  const [fromName, setFromName] = useState()
  const [fromCode, setFromCode] = useState()  
  const [toName, settoName] = useState("United States")
  const [toCode, settoCode] = useState("us")
  const {response, setResponse} = useConverter(fromCode,toCode,null)

  useEffect(():void=>{
    callGeo().then(
      (res:any) =>{
        setFromName(res.countryName)
        setFromCode(res.countryCode.toLowerCase())
      }
    )
    callCurrency().then( (res:any) =>{
      console.log(res)
    })
    
  },[])


  
    return (
    <main className='w-full h-screen'>
      <Head>
        <title>Currency Converter</title>
      </Head>
      <Navbar/>
      <p className='text-center text-white font-bold mt-4'>Converting World Wide Currencies and CryptoCurrencies</p>
      <div className='w-4/5 h-auto gap-3 bg-blue2 m-auto mt-7 rounded-lg p-10 flex items-center justify-center md:flex-row flex-col'>
        <CurrBlock Flag={`https://flagcdn.com/h60/${fromCode}.png`} enabled={true} CountryName={fromName}/>
        <CurrBlock enabled={true} Flag={`https://flagcdn.com/w80/${toCode}.png`} CountryName={toName}/>
        
      </div>
      <button className='block m-auto mt-4 text-white font-bold bg-darkGreen w-56 h-12 rounded-sm hover:bg-green duration-1000'>Convert</button>
    </main>
  )
}

export default Home