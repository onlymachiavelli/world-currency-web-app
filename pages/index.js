import React from "react"
import Head from "next/head"
import Navbar from "./../src/UI/navbar"

import styles from "./../styles/Home.module.css"

import CurrencyContainer from "../src/UI/Source"

const Home = () => {
  return (
    <main>
      <Head>
        <title>Convert Currencies</title>
      </Head>

      <main className={styles.body}>
        <Navbar />
        <CurrencyContainer />
      </main>
    </main>
  )
}

export default Home
