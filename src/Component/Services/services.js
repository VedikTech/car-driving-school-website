import React from 'react';
import img5 from '../../assets/photo5.webp';
import styles from "./service.module.css";
import Servicescard from "./servicescard.js"
export const Services = () => {
  return (
    <div>
      <h1 className={styles.heading}>Our Services</h1>
      <table border="1px" className={styles.table} >
      
      <tr>
       <td rowSpan="2"><img src={img5} alt="one man driving car"/></td>
       <td >
       <Servicescard 
       img= "fa-solid fa-car"
       heading="picks and drop service" 
       para="Lorem Ipsum is simply typesetting industry. standard dummy text ever since the 1500s"/>
       </td>

<td>
<Servicescard 
img="fa-solid fa-bell" 
heading="picks and drop service" 
para="Lorem Ipsum is simply typesetting industry. standard dummy text ever since the 1500s"/>
</td>
       </tr>

       <tr>
       
       <td>
       <Servicescard img="fa-regular fa-credit-card" 
       heading="picks and drop service"
        para="Lorem Ipsum is simply typesetting industry. standard dummy text ever since the 1500s"/>
        </td>

<td>
<Servicescard 
img="fa-solid fa-thumbs-up" 
heading="picks and drop service" 
para="Lorem Ipsum is simply typesetting industry. standard dummy text ever since the 1500s"/>
</td>
       </tr>

      </table>
    </div>
  );
};

export default Services;
