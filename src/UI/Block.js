import React from "react"
import styles from "./../../styles/Home.module.css"
const Currency = ({ ...props }) => {
  let Flag = `https://flagcdn.com/w2560/${props.TheFlag}.png`
  return (
    <div className={styles.convertBlock}>
      <div className={styles.flag}>
        <img src={Flag} alt="Flag" width="80px" height="50" />
      </div>
    </div>
  )
}

export default Currency