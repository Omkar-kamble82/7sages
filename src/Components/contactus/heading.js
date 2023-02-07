import styled from "styled-components";
import "./contactus.css";

const Aboutus = () => {
    return (
        <ABOUT>
            <INFO>
                <p className="contact-heading">Contact Us</p>
                <p className="contact-info">Lets Talk!</p>
                <a  href="mailto: info@7sages.co.in"><button className="getintouch margin">Get in touch</button></a>
            </INFO>
        </ABOUT>
    )
}

export default Aboutus;

const ABOUT = styled.div`
    overflow-x:hidden;
    display:flex;
    margin:50px 20px;
    flex-direction:column;
    margin-bottom:10px;

    @media only screen and (max-width: 540px) {
        margin:50px 10px;
    }
    @media only screen and (max-width: 380px) {
        margin:30px 10px;
    }
`;

const INFO = styled.div`
    width:60vw;
    padding: 30px 50px;
    border-radius: 20px;
    opacity: 0.9;

    .getintouch {
        padding: 0.5rem 2rem;
        font-size: 16px;
        font-weight: bold;
        background-color: var(--darksky);
        border:2px solid var(--darksky);
        color:var(--light);
        cursor: pointer;
    }
    .getintouch:hover {
        opacity: 0.8;
    }

    .contact-heading {
        margin-bottom:10vh;
        font-size:50px;
        font-weight:bold;
        background: linear-gradient(120deg, #3786d4 -30%, #a0d9ff 130%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-top:10vh;
    }
    
    .contact-info {
        color:grey;
        margin-bottom:2vh;
    }
    @media only screen and (min-width: 1300px) {
        .contact-heading {
            margin-bottom:6vh;
            font-size:60px;
            margin-top:2vh;
        }
        .getintouch {
            padding:0.7rem 3rem;
            font-size:21px;
        }
    }

    @media only screen and (max-width: 1200px) {
        width:90vw;
        .contact-heading {
            margin-bottom: 4vh;
            margin-top: 0vh;
        }
    }
    @media only screen and (max-width: 670px) {
        padding:20px;
        .contact-heading {
            font-size:40px;
            margin-bottom:8vh;
        }
    }
    @media only screen and (max-width: 440px) {
        width:95vw;
        margin-left:3px;
        .contact-heading {
            font-size:44px;
            margin-top:-10px;
            margin-bottom: 7vh;
        }
    }
    @media only screen and (max-width: 380px) {
        margin-left:-3px;
    }
    @media only screen and (max-width: 300px) {
        .contact-heading {
            font-size:35px;
        }
        .contact-info {
            font-size:20px;
        }
        .getintouch {
            padding:0.5rem 1rem;
            font-size:13px;
        }
    }
`;  