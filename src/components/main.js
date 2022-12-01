import logo from '../img/logo.png';
import textlogo from '../img/text.png';
import folder2 from '../img/folder2.png';
import xIcon from '../img/close.png';
import onnight from '../img/onnight.png';
import clong from '../img/clong.png';
import me from '../img/me.png';
import '../App.css';
import React, {useState, useEffect, useRef} from 'react';
import facebook from '../img/fb.png';
import amazon from '../img/amazon.png';
import nasdaq from '../img/nasdaqlogo.png';
import dartmouth from '../img/d.png';
import Typewriter from 'typewriter-effect';


function Main() {
  
  const [date, setDate] = useState(new Date());

  const aboutRef = useRef(null);
  const aboutIsClicked = useRef(false);
  const aboutCoords = useRef({startX: 40, startY: 100, lastX: 40, lastY: 100});

  const projectsRef = useRef(null);
  const projectsIsClicked = useRef(false);
  const projectsCoords = useRef({startX: 100, startY: 200, lastX: 100, lastY: 200});

  const experienceRef = useRef(null);
  const experienceIsClicked = useRef(false);
  const experienceCoords = useRef({startX: 60, startY: 350, lastX: 60, lastY: 350});

  const resumeRef = useRef(null);
  const resumeIsClicked = useRef(false);
  const resumeCoords = useRef({startX: 50, startY: 480, lastX: 50, lastY: 480});

  const aboutWindowRef = useRef(null);
  const aboutWindowIsClicked = useRef(false);
  const aboutWindowCoords = useRef({startX: 200, startY: 50, lastX: 200, lastY: 50});
  const aboutWindowBarRef = useRef(null);

  const projectsWindowRef = useRef(null);
  const projectsWindowIsClicked = useRef(false);
  const projectsWindowCoords = useRef({startX: 240, startY: 90, lastX: 240, lastY: 90});
  const projectsWindowBarRef = useRef(null);

  const experienceWindowRef = useRef(null);
  const experienceWindowIsClicked = useRef(false);
  const experienceWindowCoords = useRef({startX: 260, startY: 20, lastX: 260, lastY: 20});
  const experienceWindowBarRef = useRef(null);

  const nlpWindowRef = useRef(null);
  const nlpWindowIsClicked = useRef(false);
  const nlpWindowCoords = useRef({startX: 340, startY: 100, lastX: 340, lastY: 100});
  const nlpWindowBarRef = useRef(null);

  const pokerWindowRef = useRef(null);
  const pokerWindowIsClicked = useRef(false);
  const pokerWindowCoords = useRef({startX: 340, startY: 100, lastX: 340, lastY: 100});
  const pokerWindowBarRef = useRef(null);

  const onNightWindowRef = useRef(null);
  const onNightWindowIsClicked = useRef(false);
  const onNightWindowCoords = useRef({startX: 340, startY: 100, lastX: 340, lastY: 100});
  const onNightWindowBarRef = useRef(null);

  const clongWindowRef = useRef(null);
  const clongWindowIsClicked = useRef(false);
  const clongWindowCoords = useRef({startX: 340, startY: 100, lastX: 340, lastY: 100});
  const clongWindowBarRef = useRef(null);

  const eopmWindowRef = useRef(null);
  const eopmWindowIsClicked = useRef(false);
  const eopmWindowCoords = useRef({startX: 340, startY: 100, lastX: 340, lastY: 100});
  const eopmWindowBarRef = useRef(null);

  const containerRef = useRef(null);

  const refs =[
    {ref: aboutRef, isClicked: aboutIsClicked, coords: aboutCoords, item: "aboutfile", childRef: null},
    {ref: projectsRef, isClicked: projectsIsClicked, coords: projectsCoords, item: "projectsfolder", childRef: null},
    {ref: experienceRef, isClicked: experienceIsClicked, coords: experienceCoords, item: "experiencefolder", childRef: null},
    {ref: aboutWindowRef, isClicked: aboutWindowIsClicked, coords: aboutWindowCoords, item: "about", childRef: aboutWindowBarRef},
    {ref: projectsWindowRef, isClicked: projectsWindowIsClicked, coords: projectsWindowCoords, item: "projects", childRef: projectsWindowBarRef},
    {ref: experienceWindowRef, isClicked: experienceWindowIsClicked, coords: experienceWindowCoords, item: "experience", childRef: experienceWindowBarRef},
    {ref: resumeRef, isClicked: resumeIsClicked, coords: resumeCoords, item: "resume", childRef: null},
    {ref: nlpWindowRef, isClicked: nlpWindowIsClicked, coords: nlpWindowCoords, item: "project-window", childRef: nlpWindowBarRef},
    {ref: pokerWindowRef, isClicked: pokerWindowIsClicked, coords: pokerWindowCoords, item: "project-window", childRef: pokerWindowBarRef},
    {ref: onNightWindowRef, isClicked: onNightWindowIsClicked, coords: onNightWindowCoords, item: "project-window", childRef: onNightWindowBarRef},
    {ref: clongWindowRef, isClicked: clongWindowIsClicked, coords: clongWindowCoords, item: "project-window", childRef: clongWindowBarRef},
    {ref: eopmWindowRef, isClicked: eopmWindowIsClicked, coords: eopmWindowCoords, item: "project-window", childRef: eopmWindowBarRef}
  ]

  const [renderAbout, setRenderAbout] = useState(false);
  const [renderProjects, setRenderProjects] = useState(false);
  const [renderExperience, setRenderExperience] = useState(false);
  const [renderNLP, setRenderNLP] = useState(false);
  const [renderPoker, setRenderPoker] = useState(false);
  const [renderClong, setRenderClong] = useState(false);
  const [renderOnNight, setRenderOnNight] = useState(false);
  const [renderEopm, setRenderEopm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 6000);

    for (let r of refs) {
      let [ref, isClicked, coords, item, childRef] = [r.ref, r.isClicked, r.coords, r.item, r.childRef];
      if (ref.current && containerRef.current) {
        const curr = ref.current;
        const container = containerRef.current;

        const onMouseDown = (e) => {
          isClicked.current = true;
          coords.current.startX = e.clientX;
          coords.current.startY = e.clientY;
        }

        const onMouseUp = (e) => {
          isClicked.current = false;
          coords.current.lastX = curr.offsetLeft;
          coords.current.lastY = curr.offsetTop;
          if (coords.current.startX == e.clientX && coords.current.startY == e.clientY) {
            if (item == "aboutfile") setRenderAbout(true);
            if (item == "projectsfolder") setRenderProjects(true);
            if (item == "experiencefolder") setRenderExperience(true);
            if (item == "resume") {
              window.open("https://drive.google.com/file/d/1enCg2r9nYyr8p6BWGnCKOOT1YcEXP2dv/view?usp=sharing", "_blank");
            }
          }
        }

        const onMouseMove = (e) => {
          if (!isClicked.current) {
            return ;
          }
          const nextX = e.clientX - coords.current.startX + coords.current.lastX;
          const nextY = e.clientY - coords.current.startY + coords.current.lastY;
            curr.style.top = `${nextY}px`;
            curr.style.left = `${nextX}px`;
        }

        r.down = onMouseDown;
        r.up = onMouseUp;
        r.move = onMouseMove;
        if ((item == "about" || item=="projects" || item=="experience" || item=="project-window") && childRef.current != null) {
          childRef.current.addEventListener('mousedown', onMouseDown);
          childRef.current.addEventListener('mouseup', onMouseUp);
        } else {
          curr.addEventListener('mousedown', onMouseDown)
          curr.addEventListener('mouseup', onMouseUp)
        }
        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', onMouseUp)
      }
    }

    const cleanUp = () => {
      for (let r of refs) {
        let [ref, isClicked, coords, item, childRef, onMouseDown, onMouseUp] = [r.ref, r.isClicked, r.coords, r.item, r.childRef, r.down, r.up];
        const container = containerRef.current;
        if ((item == "about" || item=="projects" || item=="experience" || item=="project-window") && childRef.current != null) {
          childRef.current.addEventListener('mousedown', onMouseDown);
          childRef.current.addEventListener('mouseup', onMouseUp);
        } else {
          ref.current.addEventListener('mousedown', onMouseDown)
          ref.current.addEventListener('mouseup', onMouseUp)
        }
          container.removeEventListener('mousemove', r.move)
          container.removeEventListener('mouseleave', r.up)
      }
    }

    return () => {
      clearInterval(interval);
      cleanUp();
    }
  }, []);


    return (
      <div className="parent">
        <div className="entry">
          <div className="bar">
            <div className="logodiv">
              <img className="logo" src={logo}/>
              <div className="link" onClick={()=>{window.location.href = "mailto:william.a.toth.23@dartmouth.edu";}}>Email</div>
              <div className="link" onClick={() => {window.open("https://www.linkedin.com/in/william-toth-054388198/", "_blank")}}>LinkedIn</div>
              <div className="link" onClick={() => {window.open("https://github.com/william-toth", "_blank")}}>Github</div>
            </div>
            <div>
              <span className="header">William Toth</span>
              <span className="date">{date.getMonth()+1}/{date.getDate()}/{date.getYear()+1900}</span>
              <span className="time">
              {date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() == 0 ? 12 : date.getHours())}:{String(date.getMinutes()).length < 2 ? `0${String(date.getMinutes())}` : String(date.getMinutes())} {date.getHours() > 12 ? "PM" : "AM"}
              </span>
            </div>
          </div>
          <div className="main">
            <div className="container" ref={containerRef}>
            <div className="about" ref={aboutRef}>
              <div className="text-div">
                <img className="text" src={textlogo}/>
              </div>
              <div className="name">ABOUTME.txt</div>
            </div>
            <div className="projects" ref={projectsRef}>
              <div className="text-div">
                <img className="folder" src={folder2}/>
              </div>
              <div className="name">projects</div>
            </div>
            <div className="experience" ref={experienceRef}>
              <div className="text-div">
                <img className="text" src={textlogo}/>
              </div>
              <div className="name">EXPERIENCE.txt</div>
            </div>
            <div className="resume"
              ref={resumeRef}
            >
              <div className="text-div">
                <img className="text" src={textlogo}/>
              </div>
              <div className="name">RESUME.pdf</div>
            </div>
            {renderAbout ? <div className="aboutwindow" ref={aboutWindowRef}>
              <div className="windowbar" ref={aboutWindowBarRef}>
                <button className="x-button" onClick={() => {setRenderAbout(false)}}>
                  <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                  ABOUTME.txt
                </div>
                <div/>
              </div>
              <div className="abouttext">
                <div className="abouttextbox">
                  <div class="tk-blob" style={{width: "200px", marginRight: "-200px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
                      <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
                    </svg>
                  </div>
                  <div class="tk-blob" style={{width: "200px", fill: "#56cbb9", time: "20s", amount: "4", marginRight: "-100px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 747.2 726.7">
                      <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>
                  </div>
                  <div class="tk-blob" style={{width: "178px", fill: "#ff4b82", time: "5s", amount: "10", marginLeft: "-100px"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 319.2 356.7">
                      <path d="M271.9 50.3c30.6 29.3 51.3 75.5 46.6 123.9-4.6 48.4-34.6 99-86.5 136.3s-125.6 61.4-168.3 35.3S9.4 243.5 3.4 177.3C-2.7 111.2-3.1 55.2 24 26.7 51.1-1.9 105.9-2.9 153.4 2.8c47.6 5.8 88 18.2 118.5 47.5z"></path>
                    </svg>
                  </div>
                  <img src={me} className="mephoto"/>
                  <div className="abouttexttitle">
                    <div className="abouttextnontyping">My name is Will, and I'm a</div>
                    <Typewriter 
                      options={{
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                        delay: 50,
                        strings: [
                          "Software Engineer",
                          "Student",
                          "Musician"
                        ]
                      }}
                    />
                  </div>
                </div>
                <div className="abouttextbody">
                  I am a current senior at Dartmouth College studying Computer Science and Mathematics.
                </div>
                <div className="abouttextbody">
                  Over the last year, I've interned at Amazon, Meta, and Nasdaq, and I'm set to be joining Roblox next year as a Software Engineer.
                </div>
                <div className="abouttextbody">
                  In my free time, I like to play music. I'm in a band in college, and I have a few songs out. Check me out on Apple Music, Spotify, and Soundcloud.
                </div>
              </div>
            </div> : <div ref={aboutWindowRef}><div ref={aboutWindowBarRef}/></div>}
            {renderProjects ? <div className="projectswindow" ref={projectsWindowRef}>
              <div className="windowbar" ref={projectsWindowBarRef}>
                <button className="x-button" onClick={() => {setRenderProjects(false)}}>
                  <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                  projects
                </div>
                <div/>
              </div>
              <div className="projects-files">
                <button className="project-file" onClick={() => {setRenderNLP(true)}}>
                  <div className="text-div">
                    <img className="project-text" src={textlogo}/>
                  </div>
                  <div className="projectname">NLP Lexical Creativity Scorer</div>
                </button>
                <button className="project-file" onClick={() => {setRenderPoker(true)}}>
                  <div className="text-div">
                    <img className="project-text" src={textlogo}/>
                  </div>
                  <div className="projectname" >Poker Outs</div>
                </button>
                <button className="project-file" onClick={() => {setRenderOnNight(true)}}>
                  <div className="text-div">
                    <img className="project-text" src={textlogo}/>
                  </div>
                  <div className="projectname">Mobile App: OnNight</div>
                </button>
                <button className="project-file" onClick={() => {setRenderClong(true)}}>
                  <div className="text-div">
                    <img className="project-text" src={textlogo}/>
                  </div>
                  <div className="projectname">Clong</div>
                </button>
                <button className="project-file" onClick={() => {setRenderEopm(true)}}>
                  <div className="text-div">
                    <img className="project-text" src={textlogo}/>
                  </div>
                  <div className="projectname">Evolution of Popular Music</div>
                </button>
              </div>
            </div> : <div ref={projectsWindowRef}><div ref={projectsWindowBarRef}/></div> }
            {renderExperience ? <div className="experiencewindow" ref={experienceWindowRef}>
              <div className="windowbar" ref={experienceWindowBarRef}>
                <button className="x-button" onClick={() => {setRenderExperience(false)}}>
                  <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                  EXPERIENCE.txt
                </div>
                <div/>
              </div>
              <div className="experience-text">
                <div className="experience-header">
                  <img src={facebook} className="logo-image"/><span className="experience-name">Meta</span> | Software Engineer Intern
                </div>
                <div className="experience-details">
                  -Full Stack Software Engineering Intern in Meta's Menlo Park office working on the Quick Promotion Campaign Studio team using technologies such as React, Hack (PHP), and GraphQL
                </div>
                <div className="experience-header">
                <img src={amazon} className="logo-image"/><span className="experience-name">Amazon</span> | Software Development Engineer Intern
                </div>
                <div className="experience-details">
                  <div className="experience-hash">-Worked in a team of engineers both designing scalable systems and implementing them to create a service automating work authorization, a previously manual process, at Amazon</div>
                  <div>-Used various technologies, such Lambda Functions, Step Funcions, Event bridge, Redshift, S3, and other AWS services as well as languages like Typescript and Java</div>
                </div>
                <div className="experience-header">
                <img src={nasdaq} className="logo-image2"/><span className="experience-name">Nasdaq</span> | Software Engineer Fellow
                </div>
                <div className="experience-details">
                  <div className="experience-hash">-Worked in a team of engineers to develop a homomorphic encryption module, commercializing cutting edge research using Python Flask, Java Springboot, and React allowing users to perform calculations on encrypted data without decrypting it, keeping it secure during the whole process</div>
                  <div>-Improved the speed of the hibernate security services Java API when dealing with large amounts of users</div>
                </div>
                <div className="experience-header">
                  <img src={dartmouth} className="logo-image3"/><span className="experience-name">difuse Lab</span> | Full Stack Software Engineer Intern
                </div>
                <div className="experience-details">
                  <div className="experience-hash">-Collaborated with a team to build a React App through the NSF funded DIFUSE project, which analyzes zoom transcripts with NLP and generates insightful visualizations to the user.</div>
                  <div>-Used and built various APIs, contributed to a React front end and Flask app + MongoDB backend to make the app accessible to both professors and students</div>
                </div>
              </div>
            </div> : <div ref={experienceWindowRef}><div ref={experienceWindowBarRef}/></div> }
            {renderNLP ? 
            <div className="projectwindow" ref={nlpWindowRef}>
              <div className="windowbar" ref={nlpWindowBarRef}>
                <button className="x-button" onClick={() => setRenderNLP(false)}>
                    <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                    NLP Lexical Creativity Scorer
                </div>
                <div/>
              </div>
              <div>
                <div className="project-title">
                  <div>
                    The Baker-Toth Lyrical Creativity Index
                  </div>
                </div>
                <div className="projectbody">
                  This is an NLP project that I made with my friend Charlie Baker. It aims to score lyrical creativity by three main criteria: type token ratio, average dataset frequency, and variance in distance from KMeans centroids of many other songs. The entire project is done in python, and the writeup is where you will find all of the information on how we score creativity and the performance of our code.
                </div>
                <div className="projectlinks">
                  <button className="project-button" onClick={() => {window.open("https://github.com/william-toth/lyrical-creativity-score/blob/main/paper.pdf", "_blank")}}>Writeup</button>
                  <button className="project-button" onClick={() => {window.open("https://github.com/william-toth/lyrical-creativity-score", "_blank")}}>Github</button>
                </div>
              </div>
            </div> : 
            <div ref={nlpWindowRef}><div ref={nlpWindowBarRef}/></div>}
            {renderPoker ? 
            <div className="projectwindow" ref={pokerWindowRef}>
              <div className="windowbar" ref={pokerWindowBarRef}>
                <button className="x-button" onClick={() => setRenderPoker(false)}>
                    <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                    Poker Outs
                </div>
                <div/>
              </div>
              <div>
                <div className="project-title">
                  <div>
                    Poker Outs Odds Calculator
                  </div>
                </div>
                <div className="projectbody">
                This is a tool for poker players to calculate their odds of getting certain hands.
                </div>
                <div className="projectlinks">
                  <button className="project-button" onClick={() => {window.open("https://github.com/william-toth/poker-outs", "_blank")}}>Github</button>
                  <button className="project-button" onClick={() => {window.open("https://poker-outs.netlify.app/", "_blank")}}>Web Product</button>
                </div>
              </div>
            </div> : 
            <div ref={pokerWindowRef}><div ref={pokerWindowBarRef}/></div>}
            {renderOnNight ? 
            <div className="projectwindow" ref={onNightWindowRef}>
              <div className="windowbar" ref={onNightWindowBarRef}>
                <button className="x-button" onClick={() => setRenderOnNight(false)}>
                    <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                    Mobile App: OnNight
                </div>
                <div/>
              </div>
              <div>
                <div className="webwrapper">
                  <img src={onnight} className="web"/>
                </div>
                <div className="project-title">
                  <div>
                    OnNight
                  </div>
                </div>
                <div className="projectbody">
                  This project is a mobile app to revolutionize Greek life planning at Dartmouth. Made by me (front end developer) and a few friends.
                </div>
                <div className="projectlinks">
                  <button className="project-button" onClick={() => {window.open("https://apps.apple.com/us/app/onnight/id1612553554", "_blank")}}>App Store</button>
                </div>
              </div>
            </div> : 
            <div ref={onNightWindowRef}><div ref={onNightWindowBarRef}/></div>}
            {renderClong ? 
            <div className="projectwindow" ref={clongWindowRef}>
              <div className="windowbar" ref={clongWindowBarRef}>
                <button className="x-button" onClick={() => setRenderClong(false)}>
                    <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                    Clong
                </div>
                <div/>
              </div>
              <div>
                <div className="webwrapper">
                  <img src={clong} className="web2"/>
                </div>
                <div className="project-title">
                  <div>
                    Clong
                  </div>
                </div>
                <div className="projectbody">
                  Clong is an all in one tool for students applying to tech jobs. It allows them to find fresh new jobs, gives them tips, and offers an organizational platform to help organize applications and keep track of upcoming deadlines. The website is still being developed but should be available soon.
                </div>
              </div>
            </div> : 
            <div ref={clongWindowRef}><div ref={clongWindowBarRef}/></div>}
            {renderEopm ? 
            <div className="projectwindow" ref={eopmWindowRef}>
              <div className="windowbar" ref={eopmWindowBarRef}>
                <button className="x-button" onClick={() => setRenderEopm(false)}>
                    <img src={xIcon} className="x"/>
                </button>
                <div className="about-title">
                    Evolution of Popular Music
                </div>
                <div/>
              </div>
              <div>
                <div className="project-title">
                  <div>
                    Evolution of Popular Music
                  </div>
                </div>
                <div className="projectbody">
                  In this project, I analyze data from every song in the Billboard Hot 100 from 1960 - 2010 in an attempt to understand which quantitative music features contribute to shifts in the musical zeitgeist. Through the random decision forest algorithm, I then predict the era and style of a given song based upon 16 quantitative musical features.
                </div>
                <div className="projectlinks">
                  <button className="project-button" onClick={() => {window.open("https://github.com/william-toth/Data_Analysis_Evolution_of_Popular_Music", "_blank")}}>Github</button>
                </div>
              </div>
            </div> : 
            <div ref={eopmWindowRef}><div ref={eopmWindowBarRef}/></div>}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Main;
