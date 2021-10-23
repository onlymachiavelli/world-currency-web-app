import React from 'react'
import styles from './../../styles/Home.module.css'
const Currency = ({...props})=>{
    return(
        <div className={styles.convertBlock}>
            
            <div className={styles.flag}></div>
        </div> 
    )
}

export default Currency