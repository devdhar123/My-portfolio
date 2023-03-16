import React from "react";
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import Particles from 'react-particles-js';

const Home = () => {

    const navigate = useNavigate();

    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Devdhar
                    <br />
                    Frontend Developer
                </h1>
            </div>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className="home__contact-me">
                    <button className="btn-btn1" onClick={handleNavigateToContactMePage}>Contact Me</button>
                    <a href="Devdhar Jaganer  (3).pdf" download="Devdhar Jaganer  (3).pdf">
                        <button className="btn-btn">
                            Download Resume
                        </button>
                    </a>
                </div>
            </Animate>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className="icon-container">
                    <div className="icon-face">
                        <a href="https://www.linkedin.com/in/devdhar-jaganer-85b14322a/"> <BsLinkedin /></a>
                    </div>
                    <div className="icon-face">
                        <a href="https://github.com/devdhar123"> <FaGithub /></a>
                    </div>
                </div>


            </Animate>
            <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(550px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
                <div className="nav-item">
                    <Link to={'/about'}>
                        <button>ABOUT ME</button>
                    </Link>
                    <Link to={'/skills'}>
                        <button>SKILLS</button>
                    </Link>
                    <Link to={'/portfolio'}>
                        <button>PORTFOLIO</button>
                    </Link>


                </div>
            </Animate>
        </section>

    )
}
export default Home;