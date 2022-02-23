import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaRupeeSign,FaClock} from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aagaz Website</title>
      </Head>
      <nav>
        <span>
          <img src="/images/aagaaz-logo.png" alt="logo" />
        </span>
        <ul>
          <li><Link to="home"  activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>Home</Link></li>
          <li><Link to="events" activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={500}>Events</Link></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>          
      </nav>
      <main className={styles.main}>
        <div className={styles.hero} id="home">  
          <img className={styles.fusion} src="/images/Fusion.png" />
          <h3>presents</h3>
          <img className={styles.aagaaz} src="/images/aagaaz-logo.png" alt="logo" />
          <img className={styles.people} src="/images/people.png" />
        </div>

        <h2 className="heading" id="events">Events</h2>
        <div className={styles.events}>
          <div className={styles.event}>
            <div className={styles.imageContainer}>
              <img src="http://via.placeholder.com/350" alt="event1" />
            </div>
            <div className={styles.ContentContainer}>
              <h3>Event can be of four </h3>
              <div className={styles.metadata}>
              <div className={styles.fee}>
                <span className={styles.icon}><FaRupeeSign/></span>
                <span>10Rs</span>
              </div>
              <div className={styles.time}>
                <div className={styles.icon}><FaClock/></div>
                <span>23rd - 11:00AM</span>
              </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
              <button>More Info</button>
            </div>
          </div>
        </div>
        <div className={styles.eventsNames}>
          <span>Vlog making</span>
          <span className={styles.active}>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
          <span>Vlog making</span>
        </div>

        <h2 className="heading" id="events">Register</h2>


      </main>

    </div>
  )
}
