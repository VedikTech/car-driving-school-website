import React from 'react';
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div >
    
    <div className={styles.header}>
    <div className={styles.header_part}>
    <div className={styles.location_logo}><i className="fa-solid fa-location-dot" style={{color: "#ffffff",fontSize:"20px"}}></i></div>
    <div><p>890,Sector 62, Gan Sarovar,GAil Noida(Delhi/NCR)</p></div>
    </div>
 <div> <p>Admin</p></div>
   
    </div>



    <div className={styles.navbar}>
    
<h2 className={styles.heading}><span style={{color:"orange"}}>Driving</span> School</h2>

<ul className={styles.navitems} >
<li>Home</li>
<li>About Us</li>
<li>Packages</li>
<li>Apply Now</li>
<li>Contact Us</li>
<li>Enquiry</li>

</ul>
    


    
    </div>
 
    </div>
  )
}

export default Navbar