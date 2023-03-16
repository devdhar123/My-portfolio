import React from "react"
import {BsInfoCircle} from 'react-icons/bs'
import PageHaeaderContainer from "../../components/pageHeaderContainer";
import './style.scss';
import {Animate} from 'react-simple-animate'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom'

const Contact =()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8p1jbk', 'template_1zqiinj', form.current, 'sVFgLw1w6KRruWLQG')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  
    return(
    
        <section id="contact" className="contact">
        <PageHaeaderContainer
        headerText ='Contact Me'
        icon={<BsInfoCircle size={40}/>}
        />
        <div className="contact__content">
            <Animate
            play 
            duration={1}
            delay={0}
            start={{
                transform : "translateX(-200px)"
            }}
            end ={{
                transform : "translateX(0px)"
            }}
            >
                <h3
                className="contact__content__header-text">Let's Talk</h3>
                
            </Animate>
            <Animate
            play 
            duration={1}
            delay={0}
            start={{
                transform : "translateX(200px)"
            }}
            end ={{
                transform : "translateX(0px)"
            }}
            >
       
        <div className="from contact__content__form" >
                    <form ref={form} onSubmit={sendEmail}>
                    <div className="contact__content__form__controlswrapper">
                        <div>
                            <input required name="name" className="inputName" type={"text"}/>
                            <label htmlFor="na me" className="nameLabel">Name</label>
                        </div>
                        <div >
                        <input required name="email" className="inputEmail" type={"text"}/>
                            <label htmlFor="email" className="emailLabel">Email</label>
                        </div>
                        <div>
                        <input required name="description" className="inputDescription" type={"text"}/>
                            <label htmlFor="description" className="descriptionLabel">Description</label>
                        </div>
                    </div>
                    <button type="submit" value="Send" >Submit</button>
                  
                    </form>
                </div>

                </Animate>

        </div>
        <div className="class-btn">
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
       </section>
    )
}
export default Contact;