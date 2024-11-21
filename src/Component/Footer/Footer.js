import React from 'react'
import styles from './footer.module.css'
function Footer() {
  return (
    <div className={styles.Footer_part}>

    <div className={styles.Adress_box}>

    <div>
    <h1>Address</h1>
    <p>Car Driving School Management Systems</p>
    <p>Contact Number: 9045332455<br/>
       Email: info@gmail.com</p>
    </div>

    <div>
    <h1>Navigation</h1>
    <ul className={styles.navigation_list}>
    <li>Home</li>
    <li>About Us</li>
    <li>Packages</li>
    <li>Enquiry</li>
    <li>Apply Now</li>
    
    </ul>
    </div>

    </div>

    <div><p>2019 Car Ching Scheed Management Systers All rights reserved</p></div>
    </div>
  )
}

export default Footer