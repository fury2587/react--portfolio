
import React from 'react'
import styles from "./Hero.module.css"

import {getImageUrl} from "../../util"
const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>

      <h1 className={styles.title}>Hi ,I'm Arun</h1>
      <p className={styles.description}>
        A Full Stack Developer with a passion for learning new things. Reach out if you'd like to connect with me 
      </p>
      <a href="mailto:arunydv2587@gmail.com" className={styles.contactBtn}>Contact Me</a>
    </div>
    <img src={getImageUrl("hero/heroImage.png")}alt="Image of Arun"  className={styles.heroImg}/>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomblur}></div>
    </section>
  )
}

export default Hero;