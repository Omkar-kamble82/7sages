import "./contactus.css";

import { useRef,useEffect, useState } from "react";

const Contacts = () => {
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
        <div className="contact" ref={myRef}>
            <div className={`contact-div hidden ${visible ? "show":""}`}>
                <img className="contacts-heading" src="/resources/svgs/email.svg" alt="email-icon" />
                <p className="contact-content email">info@7sages.co.in</p>
            </div>
            <div className={`contact-div contactt-div hiddenright ${visible ? "showright":""}`}>
                <img className="contacts-heading" src="/resources/svgs/location.svg" alt="address-icon" />
                <p className="contact-content address">HD-079, WeWork Galaxy, 43, Residency Road, Shanthala Nagar, Ashok Nagar, Bengaluru - 25</p>
            </div>
        </div>
    )
}

export default Contacts;