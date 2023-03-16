import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContnt from "../../components/pageHeaderContainer";
import { Animate } from 'react-simple-animate'
import './style.scss'
import { DiReact, DiMongodb, DiNodejs, DiGit } from 'react-icons/di'
import { Link } from 'react-router-dom'

const personalDetails = [
    {
        label: "Name",
        value: "Devdhar Jaganer"
    },
    {
        label: "Age",
        value: "23"
    },
    {
        label: "Address",
        value: "India"
    },
    {
        label: "Email",
        value: "devdharkhatri592@gmail.com"
    },
    {
        label: "Contact No",
        value: "+91 9926888671"
    },
]

const jobSummary = 'My name is Devdhar Jaganer and I have completed my bachelor degree in B.Sc in Information Technology and currently pursuing MCA from Sage University. I am much interested in developing new things which excite me a lot. :) I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with Reactjs.'

const About = () => {
    return (

        <section id='about' className="about">
            <PageHeaderContnt
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />



            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <h3 className="presonalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'
                        }}
                        end={{
                            transform: 'translatex(0px)'
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <DiReact size={55} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiNodejs size={55} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiMongodb size={55} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiGit size={55} color="var(--yellow-theme-main-color)" />
                            </div>

                        </div>
                    </Animate>
                </div>
            </div>
            <div className="class-btn">
                    <Link to={'/skills'}>
                        <button>SKILLS</button>
                    </Link>

                    <Link to={'/portfolio'}>
                        <button>PORTFOLIO</button>
                    </Link>
                    <Link to={'/contact'}>
                        <button>CONTACT</button>
                    </Link>
                </div>
        </section>
    )
}
export default About;