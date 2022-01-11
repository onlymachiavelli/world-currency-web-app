import React from "react"
import styles from "./../../styles/Home.module.css"
import Currency from "./Block"
import callGeo from "../apiCall/location"

callGeo().then((res) => console.log(res))
const CurrencyContainer = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <p id={styles.title}>
        Converting World Wide Currencies and CryptoCurrencies
      </p>
      <br />
      <div className={styles.cont}>
        <Currency TheFlag={props.Cflag} />
        <Currency TheFlag={props.Tflag} />
      </div>
      <button className={styles.btn} onClick={props.aCtion}>
        CONVERT
      </button> 
    </div>
  )
}

export default CurrencyContainer
