import { useEffect, useState } from "react";
import styled from "styled-components";

import "./Home.css";

const Navbar = () => {

    const [menustatus, setMenustatus] = useState();
    const [show, setShow] = useState(false);

    const transition = () => {
        if(window.scrollY > 100) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    const blur = () => {
        setShow(true)
    }

    const handleclose = () => {
        setMenustatus(false);
        setTimeout(blur,220);
    }

    useEffect(() => {
        let handler = (e) => {
            if(e.target) {
                setMenustatus(false);
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("scroll",handler);
        window.addEventListener("scroll", transition);
        return () => window.removeEventListener("scroll", transition);
    },[]);

    return (
        <div className = {`navbar ${show && "navbar-blur"}`}>
            <div className="nav">
                <div><a href="#home"><img className="logo" src="/resources/images/logo.png" alt="7sages-logo" /></a></div>
                <div className="nav-link">
                    <a href="#solution"><li className="nav-links">Our Solutions</li></a>
                    <a href="#client"><li className="nav-links">Our Clients</li></a>
                    <a href="#aboutus"><li className="nav-links">About Us</li></a>
                    <a href="#contactus"><li className="nav-links">Contact Us</li></a>
                    <a href="mailto: info@7sages.co.in"><li className="nav-linkss"><button className="get-in-touch">Get In Touch</button></li></a>
                </div>
            </div>
                {!menustatus && <div className="menu" onClick={() => {setMenustatus(true);setShow(false);}}><img src="/resources/svgs/menu.svg" alt="menu" /></div>}
                <MENU className="menu-list" show = { menustatus }>
                    <CLOSE src = "/resources/svgs/close.svg" onClick={handleclose}/>
                    <a href="#solution"><li onClick={handleclose}>Our Solutions</li></a>
                    <a href="#client"><li onClick={handleclose}>Our Clients</li></a>
                    <a href="#aboutus"><li onClick={handleclose}>About Us</li></a>
                    <a href="#contactus"><li onClick={handleclose}>Contact Us</li></a>
                    <a href="mailto: info@7sages.co.in"><li onClick={handleclose}><button className="get-in-touch">Get In Touch</button></li></a>
                </MENU>
        </div>
    )
}

export default Navbar;

const CLOSE = styled.img`
    height:30px;
    width:30px;
    cursor:pointer;
    margin-left: 160px;
    padding:5px;
    margin-top:30px;
    margin-bottom:100px;

    &:hover{
        background-color: hsla(0,0%,0%,.05);
        transition: background-color 0.2s ease-out;
        border-radius: 50%;
    }

    @media only screen and (max-width: 940px) {
        margin-left: 180px;
        margin-top:100px;
        margin-bottom:40px;
    }
    @media only screen and (max-width: 420px) {
        margin-left: 170px;
        margin-top:30px;
    }
    @media only screen and (max-width: 480px) {
        margin-left: 160px;
        margin-top:90px;
    }
    @media only screen and (max-width: 300px) {
        margin-left: 140px;
    }
`

const MENU = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background: rgba(18, 35, 46,0.97);
    width:250px;
    z-index: 16;
    list-style: none;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left:20px;
    overflow: hidden;
    transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
    transition: transform 0.3s ease-in;
    li{
        padding:13px 5px;
        overflow: hidden;
    }
    a{
        text-decoration:none;
        color:white;
        font-weight:bold;
        margin-left:30px;
        overflow: hidden;
    }
    a:hover{
        color:var(--darksky);
        transition: 0.4s;
    }

    @media only screen and (max-width: 940px) {
        margin-top:-70px;
        li{
            padding:8px 5px;
        }
    }
    @media only screen and (max-width: 480px) {
        width:220px;
        font-size:18px;
        li{
            padding:10px 5px;
        }
    }
    @media only screen and (max-width: 300px) {
        width:200px;
        font-size:13px;
        li {
            padding:9px 5px;
        }
    }
`