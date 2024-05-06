  import React from 'react';
  import styles from "./About.module.css"; 
import { getImageUrl } from '../../util';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <div className={styles.content}>
            <h2 className={styles.title}>
                About

            </h2>

            <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")}
           alt=" Cursour Icon" />
           
           <div className={styles.aboutItemtext}>
            <h3>Frontend Developer</h3>
            <p> I'm a frontend developer who is intrested in developing new projects with responsiveness 
              and user experience as the main focus. 
            </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")}
           alt=" Server Icon" />
           
           <div className={styles.aboutItemtext}>
            <h3>Backend Developer</h3>
            <p>  
              I have experience in developing fast and optimised Backend and API's
            </p>

            </div>
            </li>
            <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")}
           alt=" UI Icon" />
           
           <div className={styles.aboutItemtext}>
            <h3>UI Designer</h3>
            <p> I am keen intrested in designing landing pages
            </p>
            </div>
            </li>
           </ul>
           
         </div>
    </section>
  )
}
export default About;