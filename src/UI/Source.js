import React from "react"
import styles from "./../../styles/Home.module.css"

const CurrencyContainer = ({ ...props }) => {
  return (
    <div className={styles.container}>
      <p id={styles.title}>
        Converting World Wide Currencies and CryptoCurrencies
      </p>
      <div className={styles.cont}>
        <div className={styles.convertBlock}></div>
        <div className={styles.convertBlock}></div>
      </div>
    </div>
  )
}

export default CurrencyContainer
