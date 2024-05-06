import React from 'react';
import { getImageUrl } from '../../util';

import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contact
                </h2>
                
        <p>
            Feel free to contact

        </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="emailicon" />
                <a href="mailto:arunydv2587@gmail.com">arunydv2587@gmail.com </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinicon" />
                <a href="https://www.linkedin.com/in/arun-yadav-fury0007/">Linkedin </a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="githubicon" />
                <a href="https://github.com/fury2587">github.com </a>
            </li>
        </ul>
    </footer>
  )
}
export default Contact;