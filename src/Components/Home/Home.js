import Navbar from "./Navbar";
import "./Home.css";

import { useRef,useEffect, useState } from "react";

const Home = () => {
    
    const myRef = useRef();
    const [visible,setVisible] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    },[])

    return (
        <div className="b">
            <Navbar />
            <div className="banner overblur" id="home">
                <div className="banner-info">
                    <p className={`banner-title hidden ${visible ? "show":""}`} ref={myRef}>Smart analytics & expert solutions<br/>to your e-commerce business</p>
                    <p className={`banner-description hiddenright ${visible ? "showright":""}`}>We have developed AI & ML powered Smart solutions to collect and analyse online business data in the most efficient way. With the most important insights from analyses, we help to intelligently strengthen marketing strategies, product offerings and business plans!</p>
                </div>
                <img className="banner-img" src="/resources/images/banner.png" alt="banner-img" />
                <div className="banner-backdrop"></div>
            </div>
        </div>
    )
}

export default Home;