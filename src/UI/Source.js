import React from "react"
import styles from "./../../styles/Home.module.css"
import Currency from "./Block"
import callGeo from "../apiCall/location"

callGeo().then(res => console.log(res))
const CurrencyContainer = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <p id={styles.title}>
        Converting World Wide Currencies and CryptoCurrencies
      </p>
      <div className={styles.cont}>
        <Currency/>
        <Currency/>
      </div>
    </div>
  )
}

export default CurrencyContainer
