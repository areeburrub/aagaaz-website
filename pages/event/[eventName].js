import React from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/Event.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import {useState, useEffect} from 'react'

const EventPage = () => {

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



  const router = useRouter();
  
  const [event, setEvent] = useState(data[0]);

  useEffect(() => {
    const eventName = router.query.eventName;
    const event = data.find(event => event.name === eventName);
    setEvent(event);
  }, [router.query.eventName]);
  

  
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

  return (
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
        <main className={styles.main}>
        
        <div className={styles.EventContainer}>
          <h2 className="heading">{event?.name}</h2>
          <img className={styles.EventImg} src={event?.img}/>
          <p>{event?.description}</p>
          <img className={styles.EventBg} src={event?.background}/>
          <button>Register</button>
        </div>


      </main>
    </>
  )
}

export default EventPage