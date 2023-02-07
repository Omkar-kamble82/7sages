import "./Customerneed.css";

import { useRef,useEffect, useState } from "react";


const Customerneed = () => {
    const myReef = useRef();
    const myReef1 = useRef();
    const myReef2 = useRef();
    const [visible,setVisible] = useState();
    const [visible1,setVisible1] = useState();
    const [visible2,setVisible2] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible(entry.isIntersecting)
        })
        observer.observe(myReef.current)
        const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible1(entry.isIntersecting)
        })
        observer1.observe(myReef1.current)
        const observer2 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisible2(entry.isIntersecting)
        })
        observer2.observe(myReef2.current)
    },[])
    return (
        <div className="CN">
            <p className="CN-heading">E-commerce business challenges </p>
            <div className="CN-divs">
                <div className={`CN-div hidden ${visible ? "show":""}`} ref={myReef}>
                    <img className="CN-img" src="/resources/images/ManagingData.png" alt="ManagingData" />
                    <p className="CN-div-heading">Managing huge volume of data</p>
                    <p className="CN-div-content">Most critical and difficult parts of online business is managing the huge amount of data on a daily basis. We understand this important need of the business and therefore built solutions to collect online data efficiently</p>
                </div>
                <div className={`CN-div hidden1 ${visible1 ? "show1":""}`} ref={myReef1}>
                    <img className="CN-img" src="/resources/images/dataanalysis.png" alt="dataanalysis" />
                    <p className="CN-div-heading">Assemble, depict, and analyse complex data sets</p>
                    <p className="CN-div-content">E-commerce business not only requires a lot of time to collect and store data, but also organize, visualize and analyse complex data. We have specific methods to cleanse, organize and analyse data to highlight key metrics. This makes it very helpful to strengthen business strategies</p>
                </div>
                <div className={`CN-div hidden2 ${visible2 ? "show2":""}`} ref={myReef2}>
                    <img className="CN-img" src="/resources/images/businessgrowth.png" alt="ManagingData" />
                    <p className="CN-div-heading">Obtaining data to aid in decision making</p>
                    <p className="CN-div-content">Business managers need the right information at the right time to make the right decisions. Our solutions help in gaining important insights provided using structured reports and dynamic dashboards. This helps executives use intelligent analytics to drive business growth</p>
                </div>
            </div>
        </div>
    )
}

export default Customerneed;