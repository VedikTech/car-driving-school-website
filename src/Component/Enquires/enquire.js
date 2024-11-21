import React from 'react'
import styles from "./enquire.module.css";
import img6 from "../../assets/photo6.avif";

function Enquire() {
  return (
    <div className={styles.enquire_box}>
     <img className={styles.enquire_img}src={img6} alt="backgournd picure for enquire"/>
    <div className={styles.enquire_form_box}>
     <div className={styles.enquire_form}>
      <form >
      <input type="text" placeholder='Full Name'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Mobile Number'/>
      <input type="text" placeholder='Enquire About'/>
      <input className={styles.enquire_button} type="submit" value="ENQUIRE NOW"/>
      </form></div>
      <div className={styles.enquire_heading}>
      <h1><span style={{color:"orange"}}>Enquire</span> Now </h1>
     <p>Please fill out the form to enquire about our car driving services.</p>
     </div>
    </div>
    </div>
  )
}

export default Enquire;