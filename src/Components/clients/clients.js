import "./client.css";
import styled from "styled-components";
import Clientslider from "./slider";
import MobileClientslider from "./mobileslider";
import useWindowSize from "./windowsize";

const Clients = () => {
    const { width } = useWindowSize();

    return (
        <div id="client" className="clients">
            <p className="client-heading">Our Clients</p>
            {width < 610 ? <MobileClientslider /> : <Clientslider />}
            <LOGOS>
                <img className="icons m" src="/resources/images/3M.png" alt="3M-logo" />
                <img className="icons cosmix" src="/resources/images/Cosmix.png" alt="Cosmix-logo" />
                <img className="icons" src="/resources/images/Langoor.png" alt="Langoor-logo" />
                <img className="icons" src="/resources/images/Pepsico.png" alt="pepsico-icon" />
                <img className="icons" src="/resources/images/CurryEase.png" alt="curryease-icon" />
            </LOGOS>
        </div>
        )
    }

export default Clients;


const LOGOS = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    flex:1;
    justify-content:center;
    margin-bottom:40px;
    margin-top:40px;

    .cosmix {
        padding-top:30px;
    }
    .icons {
        height:auto;
        max-width:100%
        aling-items:center;
        justify-content:center;
        margin:20px 30px;
    }
    .m {
        height:100px;
        padding-top:30px;
    }

    @media only screen and (max-width: 800px) {
        .m {
            padding-top:20px;
        }   
    }
    @media only screen and (max-width: 500px) {
        margin:0;
        margin-top:10px;
    }
    @media only screen and (max-width: 467px) {
        .icons{
            height:85px;
            width:124px;
        } 
        .m {
            padding-top:30px;
        }  
        .cosmix {
            padding-top:40px;
        } 
    }
    @media only screen and (max-width: 300px) {
        .icons{
            height:auto;
            width:80px;
        }
        .m {
            padding-top:0px;
        }  
        .cosmix {
            padding-top:0px;
        }
    }

`;