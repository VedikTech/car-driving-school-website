import React from 'react'
import styles from "./suscribeform.module.css";
import Headings from '../Services/headings';

function Suscribe_form() {
  return (
    <div className={styles.subscriber_box}>
    <Headings heading="Our Services"/>

<form className={styles.subscribe_form}>
<input type="text" placeholder="Name"  />
<input type="text" placeholder="Email"  />
<input  className={styles.subscribe_button}type="submit" value="Subscribe"/>
</form>

    </div>
  )
}

export default Suscribe_form