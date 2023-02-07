import "./Corecapablities.css";

import { useRef,useEffect, useState } from "react";

const Corecapablities = () => {
    const CoreC1 = useRef();
    const CoreC2 = useRef();
    const CoreC3 = useRef();
    const CoreC4 = useRef();
    const [visibleCoreC1,setVisibleCoreC1] = useState();
    const [visibleCoreC2,setVisibleCoreC2] = useState();
    const [visibleCoreC3,setVisibleCoreC3] = useState();
    const [visibleCoreC4,setVisibleCoreC4] = useState();

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleCoreC1(entry.isIntersecting)
        })
        observer1.observe(CoreC1.current)
        
        const observer2 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleCoreC2(entry.isIntersecting)
        })
        observer2.observe(CoreC2.current)
        
        const observer3 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleCoreC3(entry.isIntersecting)
        })
        observer3.observe(CoreC3.current)
        
        const observer4 = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setVisibleCoreC4(entry.isIntersecting)
        })
        observer4.observe(CoreC4.current)
        
    },[])
    return (
        <div className="CoreC">
            <p className="CoreC-heading">Our core capabilities</p>
            <div className="CoreC-divs">
                <div className={`CoreC-div hidden ${visibleCoreC1 ? "show":""}`} ref={CoreC1}>
                    <img className="CoreC-img" src="/resources/images/AIpowered.png" alt="AI-Powered" />
                    <p className="CoreC-content">AI-powered techniques for data collection</p>
                </div>
                <div className={`CoreC-div hiddenright ${visibleCoreC2 ? "showright":""}`} ref={CoreC2}>
                    <img className="CoreC-img" src="/resources/images/real-time.png" alt="Real-time" />
                    <p className="CoreC-content">Real-time and dynamic analytics</p>
                </div>
                <div className={`CoreC-div hidden ${visibleCoreC3 ? "show":""}`} ref={CoreC3}>
                    <img className="CoreC-img" src="/resources/images/customized-solution.png" alt="Customized-solution" />
                    <p className="CoreC-content">Customized solution modules</p>
                </div>
                <div className={`CoreC-div hiddenright ${visibleCoreC4 ? "showright":""}`} ref={CoreC4}>
                    <img className="CoreC-img" src="/resources/images/business.png" alt="Business-Intelligence" />
                    <p className="CoreC-content">Business intelligence based on data</p>
                </div>
            </div>
        </div>
    )
}

export default Corecapablities;