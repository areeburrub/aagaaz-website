import React from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Gallery.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'
import {FaGithub,FaTwitter,FaInstagram, FaLinkedin} from 'react-icons/fa';

const Team = () =>{

  const router = useRouter();
  const [scrollPos, setScrollPos] = useState(0);
  const [Nav, setNav] = useState(false);
  
  const Scroller = () =>{
    if(window.scrollY >= 150){
      setNav(true);
    }
    else{
      setNav(false);
    }
    setScrollPos(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', Scroller);
  },[])
  
  const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
  return(
    <>
      <nav className={Nav ? 'active' : null}>
        <span>
          <img src="/images/aagaaz-logo.png" alt="logo" />
        </span>
        <ul>
          <li><a onClick={()=>{router.push('/')}}>Back to Main Page</a></li>
        </ul>          
      </nav>
    <div className={styles.hero} id="home">  
      <img className={styles.fusion} style={{top:scrollPos/5}}  src="/images/Fusion.png" />
      <h3 style={{top:scrollPos/5}} >presents</h3>
      <img className={styles.aagaaz} style={{top:scrollPos/5}} src="/images/aagaaz-logo.png" alt="logo" />
      <h3 style={{top:scrollPos/5}} >A Techno-Cultural Fest</h3>
      <h3 style={{top:scrollPos/5}} >on 22rd and 23th February</h3>
      <img className={styles.people} style={{top:-scrollPos/5}} src="/images/people.png" />
    </div>
    <h1 className="heading">Picture Gallery</h1>
    
    <div className={styles.GalleryContainer}>
    </div>

	<div className={styles.gallery}>
        {
          images.map((image,index) => ( 
            <div className={styles.galleryItem} key={index}>
              <img className={styles.galleryImage} src={`images/gallery/image (${image}).jpg`} />
            </div>
          ))
        }
  </div>




    </>
  )
}

export default Team