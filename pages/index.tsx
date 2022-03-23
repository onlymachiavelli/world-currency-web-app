import React, { useState, useEffect } from "react"
import Navbar from "../src/UI/Navbar"
import callCurrency from "../src/apiCall/currencycall"
import callGeo from "../src/apiCall/location"
import Head from "next/head"
import CurrBlock from "./../src/UI/currencyBlock"
import useConverter from "../src/hook/useConverter"
import currencyMenu from "../src/UI/currencyMeny"
import worldDatas from "../src/apiCall/worldWide"

import { countryCodes } from "../src/apiCall/co"


const Home = () => {
  /*
    const [from, setcFrom] = useState()
  const [to, setTTo] = useState("us")
  
  const [geo, setGeo] = useState()

  useEffect(() => {}, [])

  const {
    response,
    setResponse,
    setFrom,
    setTcurrency,
    fromCurrency,
    toCurrency,
    exchange
  } = useConverter("us")
  console.log(exchange)
  */
  const [inPval, setVal] = useState(1)
  const [fromData, setFromData] = useState({
    name:"",
    currencyCode:"",
    iso2:""
  })
  const [toData, setToData] = useState({
    name:"United States Of America",
    currencyCode:"USD",
    iso2:"us"
  })

  useEffect(()=>{
    callGeo().then(
      (res:any) =>{
        if (res){
          setFromData({
            name:res.countryName,
            currencyCode:fromData.currencyCode,
            iso2:res.countryCode.toLowerCase()
          })
        }
      }
    )
    
    
  },[])
  const {convert, response} = useConverter()
  convert(
    {
      iso2:toData.iso2,
      currencyCode:fromData.currencyCode
    }
    ,{
      iso2:toData.iso2,
      currencyCode:fromData.currencyCode
    }
    )
  return (
    <main className="w-full h-screen ">
      <Head>
        <title>Currency Converter</title>
      </Head>
      <Navbar />

      <div className="w-full h-max ">
        <p className="text-center text-sm md:text-xl text-white font-bold mt-4">
          Converting World Wide Currencies and CryptoCurrencies
        </p>
        <div className="w-4/5 h-auto gap-3 bg-blue2 m-auto mt-7 rounded-lg p-14 flex items-center justify-center md:flex-row flex-col">
          <CurrBlock
            Flag={`https://flagcdn.com/h60/${fromData.iso2}.png`}
            enabled={true}
            CountryName={fromData.name}
            inputValue={inPval}
          />
          <CurrBlock
            enabled={true}
            Flag={`https://flagcdn.com/w80/${toData.iso2}.png`}
            CountryName={toData.name}
            inputValue={""}
          />
        </div>
        <button className="block m-auto mt-5 text-white font-bold bg-darkGreen md:w-56 w-3/4 h-12 rounded-sm hover:bg-green duration-1000">
          Convert
        </button>
      </div>
    </main>
  )
}

export default Home