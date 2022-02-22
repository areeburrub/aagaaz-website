import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>          
      </nav>
      <main className={styles.main}>
        <div className={styles.hero}>  
          <img className={styles.fusion} src="/images/fusion.png" />
          <h3>presents</h3>
          <img className={styles.aagaaz} src="/images/aagaaz-logo.png" alt="logo" />
          <img className={styles.people} src="/images/people.png" />
        </div>

        <div className={styles.events}>
          <h2>Events</h2>
          <div className={styles.event}>
            <div className={styles.imageContainer}>
              <img src="http://via.placeholder.com/350" alt="event1" />
            </div>
            <div className={styles.ContentContainer}>
              <h3>Event can be of four syllable</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
              <button>More Info</button>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}
