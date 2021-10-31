import React, { useState } from "react"
import Head from "next/head"
import Navbar from "./../src/UI/navbar"

import styles from "./../styles/Home.module.css"

import CurrencyContainer from "../src/UI/Source"
import callGeo from "./../src/apiCall/location"
let imgApi = "https://flagcdn.com/w2560/za.png"

const Home = () => {
  let [currentCountryCode, setCurrentCountry] = useState("")
  callGeo().then((res) => setCurrentCountry(res.countryCode))
  console.log(currentCountryCode)

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
