import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import {FaCalendarAlt,FaClock} from 'react-icons/fa'
import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router'

function Home () {
  
  
  const [Nav, setNav] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const router = useRouter();
  const data = [
    {
      "name":"Face Painting",
      "img":"/images/Events/face-painting.jpg",
      "duration":"1.5 HRS",
      "time":"22nd - 2PM",
      "description":"A competition to display artistic skills by painting a face depicting the theme given. The theme shall be given at 11 AM i.e. at the beginning of the event. Participants will have 3 hours to complete their look and submit their picture.",
      "background":"/images/Events/face-painting-bg.jpg",
      "checked":false,
    },
    {
      "name":"Happy Feet",
      "img":"/images/Events/happy-feet.jpg",
      "duration":"1.5 HRS",
      "time":"22nd - 3PM",
      "description":"A competion to display dancing skills by presenting a dance performance. The competition will take place in E-Block arena on day 1 3PM onwards. Participants will have to perform for minimum 2 minutes and should not exceed 4 mins",
      "background":"/images/Events/happy-feet-bg.jpg",
      "checked":false,
    },
    {
      "name":"Lens Have Fun",
      "img":"/images/Events/lens-have-fun.jpg",
      "duration":"1 Day",
      "time":"22nd - 2:30PM",
      "description":"The participant shall be given a theme at the beginning of the event. Participants will get 1 day to click pictures, All entries will be submitted to the event coordinator on 23rd Feb till 12pm. The decision of the judge will be final.",
      "background":"/images/Events/lens-have-fun-bg.jpg",
      "checked":false,
    },
    {
      "name":"Vlog Making",
      "img":"/images/Events/vlog-making.jpg",
      "duration":"1 Day",
      "time":"22nd - 3PM",
      "description":"The participant has to make a mini vlog.The duration of the vlog should not exceed 2 minutes. Topic of the vlog shall be provided at 3:00pm. All entries shall be submitted on 23rd Feb till 12pm to the coordinator.",
      "background":"/images/Events/vlog-making-bg.png",
      "checked":false,
    },
    {
      "name":"Web Inception",
      "img":"/images/Events/web-inception.jpg",
      "duration":"2 Days",
      "time":"22nd - 3PM",
      "description":"An event to design a Website. The topic for the website will be given on day 1 of the fest at 3:00pm. Participants will get 2 days to code. At 12pm (24 Feb) the link for the website should be submitted to the student in-charge.",
      "background":"/images/Events/web-inception-bg.jpg",
      "checked":false,
    },
    {
      "name":"Smash Kart",
      "img":"/images/Events/smash-kart.jpg",
      "duration":"1 HR",
      "time":"22nd - 4PM",
      "description":"The game will be played on https://smashkarts.io/ The last remaining participant shall be declared as the winner.",
      "background":"/images/Events/vlosmash-kart-bg.jpg",
      "checked":false,
    },
    {
      "name":"Badminton Tournament",
      "img":"/images/Events/badmintion-tournament.jpg",
      "duration":"2 DAY",
      "time":"22nd - 1PM",
      "description":"The first round will be played on 22nd February All those who qualify the first round will play the semi final and final on 23rd February. Only top 16 registrations accepted.",
      "background":"/images/Events/badmintion-tournament-bg.jpg",
      "checked":false,
    },
    {
      "name":"Spill the Ink",
      "img":"/images/Events/spill-the-ink.jpg",
      "duration":"2 HRS",
      "time":"22nd - 1PM",
      "description":"Participants will be given a topic at the beginning of the competition.A story has to be written based on the given topic. The story should be about 300-500 words. At 12pm, stories have to be submitted",
      "background":"/images/Events/spill-the-ink-bg.jpg",
      "checked":false,
    },
    {
      "name":"Mandala Art",
      "img":"/images/Events/mandala-art.jpg",
      "duration":"- HRS",
      "time":"23nd - 10:30AM",
      "description":"A competition to display artistic skills by sketching mandala art. The entries will be submitted through google forms. Form will be provided at 10:30 AM on the day of the event.",
      "background":"/images/Events/mandala-art-bg.jpg",
      "checked":false,
    },
    {
      "name":"Creative Junkies",
      "img":"/images/Events/creative-junkies.jpg",
      "duration":"- HRS",
      "time":"23nd - 10:30AM",
      "description":"An event to display creative skills there will be two rounds and participants have to design a marketing poster for automobile company and design a coffee mug and paste it on a mockup Participants will get two hours for this",
      "background":"/images/Events/creative-junkies-bg.jpg",
      "checked":false,
    },
    
    {
      "name":"CodeWars",
      "img":"/images/Events/codewars.jpg",
      "duration":"- HRS",
      "time":"23nd - 10:30AM",
      "description":"This is a coding competition that will take place on hackerearth. The event comprises of 4 coding question: 2 easy, 1 medium and 1 hard. Participant with maximum test cases passed shall be the winner.",
      "background":"/images/Events/codewars-bg.jpg",
      "checked":false,
    },
    {
      "name":"Token Script",
      "img":"/images/Events/token-script.jpg",
      "duration":"- HRS",
      "time":"23nd - 10:30AM",
      "description":"Participants will be given a word /phrase during the opening ceremony. A poem has to be presented based on what he/she has inferred from the given word/phrase. The poem should not exceed two minutes.",
      "background":"/images/Events/token-script-bg.jpg",
      "checked":false,
    },
    {
      "name":"Animattic",
      "img":"/images/Events/animattic.jpg",
      "duration":"- HRS",
      "time":"23nd - 10:30AM",
      "description":"This will be a quiz based on anime, music and other ott series. The quiz will take place in E-111. Participants can participate in pairs or solo.Maximum correct answers will be declared the winner(s).",
      "background":"/images/Events/animattic-bg.jpg",
      "checked":false,
    },
    
  ]



  const [EventIndex, setEventIndex] = useState(0)
  const [currentEvent, setcurrentEvent] = useState(data[0])
  
  const[RegEvents, setRegEvents] = useState(data)
  


  const updateRegEvents = (e) => {
    let temp = RegEvents;
    
    var tData = JSON.parse(e.target.getAttribute('data'));

    if (e.target.checked) {


    }
  else {
    
    }
    setRegEvents(temp);

   }


  const UpadateEventIndex = (e) =>{
    e.preventDefault();
    setEventIndex(e.target.id);
  }
  
  useEffect(() => {
    setcurrentEvent(data[EventIndex]);
    console.log(EventIndex)
  }, [EventIndex])
  

  const config = {
  delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
  preventDefaultTouchmoveEvent: false,  // call e.preventDefault *See Details*
  trackTouch: true,                     // track touch input
  trackMouse: false,                    // track mouse input
  rotationAngle: 0,                     // set a rotation angle
} 
  const handlers = useSwipeable({
    onSwiped: (eventData) =>{
      if(eventData.dir === 'Left'){
        if(EventIndex < data.length - 1){
          setEventIndex(EventIndex + 1);
        }
        else{
          setEventIndex(0);
        }
      }
      if(eventData.dir === 'Right'){
        if(EventIndex > 0){
          setEventIndex(EventIndex - 1);
        }
        else{
          setEventIndex(data.length-1);
        }
      }
    },
    ...config,
  });


  const Navbar = () =>{
    if(window.scrollY >= 150){
      setNav(true);
    }
    else{
      setNav(false);
    }
    setScrollPos(window.scrollY);
    console.log(scrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', Navbar);
  },[])


  return (
    <div >
      <Head>
        <title>Aagaz Website</title>
      </Head>
      <nav className={Nav ? 'active' : null}>
        <span>
          <img src="/images/aagaaz-logo.png" alt="logo" />
        </span>
        <ul>
          <li><Link to="home"  activeClass={styles.active} spy={true} smooth={true} offset={-70} duration={100}>Home</Link></li>
          <li><Link to="events" activeClass={styles.active} spy={true} smooth={true} offset={-50} duration={100}>Events</Link></li>
          <li><Link to="register" activeClass={styles.active} spy={true} smooth={true} offset={550} duration={100}>Register</Link></li>
          <li><Link to="about" activeClass={styles.active} spy={true} smooth={true} offset={550} duration={100}>About</Link></li>
        </ul>          
      </nav>
      <main className={styles.main}>
        <div className={styles.hero} id="home">  
          <img className={styles.fusion} style={{top:scrollPos/3}}  src="/images/Fusion.png" />
          <h3 style={{top:scrollPos/3}} >presents</h3>
          <img className={styles.aagaaz} style={{top:scrollPos/3}} src="/images/aagaaz-logo.png" alt="logo" />
          <h3 style={{top:scrollPos/3}} >A Techno-Cultural Fest</h3>
          <h3 style={{top:scrollPos/3}} >on 22rd and 23th February</h3>
          <img className={styles.people} style={{top:-scrollPos/5}} src="/images/people.png" />
        </div>



        <h2 className="heading" id="events">Events</h2>

        <div className={styles.eventsNames}>
         {data.map((item,index) => ( 
           <>
            <span id={index} className={ EventIndex == index ? styles.active : null } onClick={(e)=>{UpadateEventIndex(e)}}>{item.name}</span>
          </>
         ))}
        </div>

         <h3 className="subheading no-desktop" id="register">13 Events swipe below to know more</h3>
         <h3 className="subheading no-mobile" id="register">13 Events select events to know more</h3>
        <div className={styles.events} {...handlers} >
          <div className={styles.bg}>
            <img src={currentEvent.background}/>
          </div>

           <div className={styles.event}>
              <div className={styles.imageContainer}>
                <img src={currentEvent.img} />
              </div>
              <div className={styles.ContentContainer}>
                <h3>{currentEvent.name}</h3>
                <div className={styles.metadata}>
                <div className={styles.fee}>
                  <span className={styles.icon}><FaClock/></span>
                  <span>{currentEvent.duration}</span>
                </div>
                <div className={styles.time}>
                  <div className={styles.icon}><FaCalendarAlt/></div>
                  <span>{currentEvent.time}</span>
                </div>
                </div>
                <p>{currentEvent.description}</p>
                <button name={currentEvent.name} onClick={(e)=>{router.push(`/event/${e.target.name}`)}}>Know More</button>
              </div> 
            </div>
        </div>

        <h2 className="heading" >Register</h2>

        <div className={styles.register} id="register">
          <h3 className="subheading" id="register">Select the Events to register</h3>

          <form onSubmit={(e)=>{e.preventDefault(); console.log(RegEvents); setRegEvents([]) } }>
            <div className={styles.checkboxes}>

            {data.map((item,index) => ( 
              <div className={`${styles.checkbox} `} key={index}>
                <input id={item.name} data={JSON.stringify(item)} type="checkbox"  onClick={(e)=>{updateRegEvents(e);}}/>
                <label id={item.name} className={`${styles.names} ${styles.disableselect}`} htmlFor={item.name} >{item.name}</label>
              </div>
            ))}

            </div>
            <button className={styles.submitBtn} type="submit">Register Now</button>
          </form>

        </div>

        <h2 className="heading" id="about" >know more About Aagaaz</h2>
        <div className={styles.aboutSection}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src="/images/team.png" />
              </div>
              <div className={styles.content}>
                <span className={styles.title}>Our Team</span>
                <button onClick={()=>{router.push('/team')}}>Know More</button>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src="/images/gallery.jpg" />
              </div>
              <div className={styles.content}>
                <span className={styles.title}>Gallery</span>
                <button onClick={()=>{router.push('/gallery')}}>Know More</button>
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src="/images/galgotia.jpg" />
              </div>
              <div className={styles.content}>
                <span className={styles.title}>Our History</span>
                <button>Know More</button>
              </div>
            </div>

        </div>

      </main>

    </div>
  )
}

export default Home;
