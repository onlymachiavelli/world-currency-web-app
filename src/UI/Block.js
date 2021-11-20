import React from "react"
import styles from "./../../styles/Home.module.css"
import { MoneyBag } from "./SVG"
const Currency = ({ ...props }) => {
  let Flag = `https://flagcdn.com/w2560/${props.TheFlag}.png`
  return (
    <div className={styles.convertBlock}>
      <div className={styles.flag}>
        <img src={Flag} alt="Flag" width="70px" height="50" />
        <p id={styles.cu_title}>Tunisian Currency</p>
      </div>

      <div id={styles.toCenter}>
        <div className={styles.input}>
          <MoneyBag Width="27" Height="27" />
          <input type="number" placeholder="Enter The Currency" />
        </div>
      </div>
    </div>
  )
}

export default Currency
