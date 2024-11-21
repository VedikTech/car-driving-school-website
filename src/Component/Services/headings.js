import React from 'react'
import styles from "./headings.module.css";
function Headings(props) {
  return (
    <div>
    <h1  className={styles.Headings}>{props.heading}</h1>
    </div>
  )
}

export default Headings