import React from 'react'
import styles from "./servicescard.module.css";
function Servicescard(props) {
  return (
  
    
  <div className={styles.card} >
<div className={styles.icon}><i className={props.img}></i></div>
  <h3>{props.heading}</h3>

<p>{props.para}</p>
  
    </div>
  )
}

export default Servicescard