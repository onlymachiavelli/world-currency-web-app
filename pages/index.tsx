import React, { useState } from "react"
import Head from "next/head"
import Navbar from "./../src/UI/navbar"
import axios from "axios"
import styles from "./../styles/Home.module.css"

import CurrencyContainer from "../src/UI/Source"
import callGeo from "./../src/apiCall/location"
let imgApi = "https://flagcdn.com/w2560/za.png"
import callCurrency from "../src/apiCall/currencycall"

const Home = () => {
  const [currentCountryCode, setCurrentCountry] = useState("")
  const [test, setTest] = useState({})
  callGeo().then((res) => setCurrentCountry(res.countryCode))
  callCurrency().then((res) => {
    setTest(res)
  })

  console.log(test)

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
