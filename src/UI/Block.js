import React from "react"
import styles from "./../../styles/Home.module.css"
const Currency = ({ ...props }) => {
  let Flag = `https://flagcdn.com/w2560/${props.TheFlag}.png`
  return (
    <div className={styles.convertBlock}>
      <div className={styles.flag}>
        <img src={Flag} alt="Flag" width="70px" height="50" />
      </div>
      <div id={styles.toCenter}>
        <div className={styles.input}>
          <input type="text" />
        </div>
      </div>
    </div>
  )
}

export default Currency
