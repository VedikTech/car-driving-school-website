import React, { useState, useEffect } from 'react';
import img from '../../assets/photo-1.avif';
import img1 from '../../assets/photo-2.avif';
import img2 from '../../assets/photo-3.avif';
import styles from "./slideimg.module.css";

export const Slideimg = () => {
  
  const data = [img, img1, img2];
  let [currentIndex, setCurrentIndex] = useState(0);
function right_click()
{ 

  setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
}
function left_click()
{ 

  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) {
    prevIndex = data.length - 1; // Loop back to the last image
  }
  setCurrentIndex(prevIndex);
}
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 7000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [data.length]);

  return (
    <div className={styles.slide_box}>
    <i onClick={left_click}class="fa-solid fa-angle-left" style={{fontSize:"80px",color:"orange"}}></i>
    <div className={styles.imgbox}>
    <img  className={styles.img}src={data[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
      
      <i onClick={right_click} class="fa-solid fa-chevron-right" style={{fontSize:"80px",color:"orange"}}></i>
    </div>
  );
};

export default Slideimg;
