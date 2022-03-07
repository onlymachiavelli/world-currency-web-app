import React, { useState } from "react"
import styles from "./../../styles/Home.module.css"
import Currency from "./Block"
import callGeo from "../apiCall/location"

callGeo().then((res) => console.log(res))
const CurrencyContainer = ({ ...props }) => {
  const [from, setFrom] = useState("")

  const [to, setTo] = useState("")

  return (
    <div className={styles.container}>
      <p id={styles.title}>
        Converting World Wide Currencies and CryptoCurrencies
      </p>
      <br />
      <div className={styles.cont}>
        <Currency
          TheFlag={props.Cflag}
          Message="Enter the value"
          readOnly={false}
          Value={from}
          onChange={(e) => {
            setFrom(e.target.value)
          }}
        />
        <Currency
          TheFlag={props.Tflag}
          Message="The Result"
          readOnly={true}
          Value={to}
          onChange={(e) => {
            setTo(e.target.value)
          }}
        />
      </div>
      <button className={styles.btn} onClick={props.aCtion}>
        CONVERT
      </button>
    </div>
  )
}

export default CurrencyContainer
