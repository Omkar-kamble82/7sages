import "./aboutus.css";
import useWindowSize from "../clients/windowsize";

import { useRef,useEffect, useState } from "react";

const About = () => {
    const myRef = useRef();
    const { width } = useWindowSize();
    const myReef = useRef();
    const [visible,setVisible] = useState();
    const [visible1,setVisible1] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
        const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible1(entry.isIntersecting)
        })
        observer1.observe(myReef.current)
    },[])
    return (
        <>
        <div className="about" id="aboutus">
            <p className="aboutus-des-heading top">About Us</p>
            {width < 660 ? <img ref={myRef}  className={`aboutusbanner hidden ${visible ? "show":""}`} src="/resources/images/about-banner2.jpg" alt="aboutus-banner"/> : <img ref={myRef}  className={`aboutusbanner hidden ${visible ? "show":""}`} src="/resources/images/about-banner1.png" alt="aboutus-banner"/>}
            <div className={`aboutus-des hiddenright ${visible1 ? "showright":""}`} ref={myReef}>
                <p className="aboutus-des-heading bottom">About Us</p>
                <p className="aboutus-des-content">7 SAGES SOLUTIONS is a cutting-edge, young, and contemporary organisation with a laser-like concentration on bringing wisdom to the ecommerce industry. Our company's guiding principles are authenticity, transparency, and commitment, and we work hard to have a good impact on our clients</p>
                <div className="founder-info">
                    <img className="ceo-img" src="/resources/images/CEO.png" alt="ceoimage"/>
                    <div>
                        <h1>M S Srininivasan</h1>
                        <h2>Founder | CEO</h2>
                        <a href="https://www.linkedin.com/in/srinivasan-m-s-b179b617" rel="noreferrer" target="_blank"><img className="linkedin-logo" src="/resources/images/linkedin.png" alt="linkedin-logo"/></a>
                </div></div>
                <p className="ceo-info">Seasoned leader with rich experience & expertise in e-commerce business across consumer product industries. Has overall 18+ years of experience in sales & marketing, new product development & managing global brands. Srinivasan holds a masters in management (PGPMS) from K J Somaiya Institute of Management, Mumbai.</p>
            </div>
            </div>
        </>
    )
}

export default About;