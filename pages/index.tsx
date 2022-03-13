import React, { useState, useEffect } from "react"
import Head from "next/head"
import Navbar from "../src/UI/navbar"
import axios from "axios"
import styles from "./../styles/Home.module.css"

import CurrencyContainer from "../src/UI/Source"
import callGeo from "../src/apiCall/location"
let imgApi = "https://flagcdn.com/w2560/za.png"
import callCurrency from "../src/apiCall/currencycall"

const Home = () => {
  const [currentCountryCode, setCurrentCountry] = useState("")
  const [test, setTest] = useState({})

  useEffect(()=>{
    callGeo().then((res:any) => setCurrentCountry(res.countryCode))
    callCurrency().then((res:any) => {
      
      console.log(res)
    })
  
  }, [])

  return (
    <main>
      <Head>
        <title>Convert Currencies</title>
      </Head>

      <main className={styles.body}>
        <Navbar />
        <CurrencyContainer Cflag="tn" Tflag="mn" />
      </main>
    </main>
  )
}

export default Home
