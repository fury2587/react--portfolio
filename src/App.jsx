import styles from "./App.module.css"

import Navbar from "./component/Navbar/Navbar.jsx";

import Hero from "./component/Hero/Hero.jsx";    

import About from "./component/About/About.jsx";

import Experience from "./component/Experience/Experience.jsx" ;

import Contact from "./component/Contact/Contact.jsx";
import { Projects } from "./component/Projects/Projects.jsx";
function App() {
  

  return (
    
    <div className={styles.app}>
      <Navbar  />

      <Hero  />

      <About  />

      <Experience  />

      <Projects />
      
      <Contact />

      
      


    </div>
      

    
  )
}

export default App
