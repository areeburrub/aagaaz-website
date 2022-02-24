import React from 'react'
import {useRouter} from 'next/router'
import styles from '../styles/Team.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'
import {FaGithub,FaTwitter,FaInstagram, FaLinkedin} from 'react-icons/fa';

const Team = () =>{


  const Team = [
    {
      "name":"Jhon Deo",
      "title":"General Secratey",
      "img":"https://randomuser.me/api/portraits/men/75.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaLinkedin/>,
          "link":""
        },
        {
          "name":"Instagram",
          "icon":<FaInstagram/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
    {
      "name":"A Person",
      "title":"Coordinator",
      "img":"https://randomuser.me/api/portraits/men/72.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaLinkedin/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
    {
      "name":"Third Person",
      "title":"Member",
      "img":"https://randomuser.me/api/portraits/women/62.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaInstagram/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
    {
      "name":"Another Person",
      "title":"Member",
      "img":"https://randomuser.me/api/portraits/women/25.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaLinkedin/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
    {
      "name":"Another Guy",
      "title":"Member",
      "img":"https://randomuser.me/api/portraits/men/25.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaLinkedin/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
    {
      "name":"Another Memeber",
      "title":"Member",
      "img":"https://randomuser.me/api/portraits/men/15.jpg",
      "social":[
        {
          "name":"Github",
          "icon":<FaGithub/>,
          "link":""
        },
        {
          "name":"LinkedIn",
          "icon":<FaLinkedin/>,
          "link":""
        },
        {
          "name":"Twitter",
          "icon":<FaTwitter/>,
          "link":""
        }
      ]
    },
  ]
  
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
    <h1 className="heading">Our Team</h1>

    <div className={styles.TeamContainer}>
        <div className={styles.TeamRow}>

        {Team.map((each,index) => (          
          <div className={styles.ourTeam} key={index}>
              <div className={styles.picture}>
                <img className={styles.imgFluid} src={each.img} />
              </div>
              <div className={styles.teamContent}>
                <h3 className={styles.name}>{each.name}</h3>
                <h4 className={styles.title}>{each.title}</h4>
              </div>
              <ul className={styles.social}>
                {each.social.map((social,index) => (
                  <li><a>{social.icon}</a></li>
                ))}
              </ul>
          </div>
      ))}


        </div>
      </div>

    </>
  )
}

export default Team