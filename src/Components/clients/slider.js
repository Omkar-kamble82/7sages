import "slick-carousel/slick/slick-theme.css";
import "./client.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";

export default class Clientslider extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
        return (
            <div className="client-slider">
                <Arrow style={{ textAlign: "center" }}>
                    <img className="arrow back" onClick={this.previous} src="/resources/images/backarrow.png" alt="backarrow"/>
                </Arrow>
                <Slider ref={c => (this.slider = c)} {...settings} autoplay autoplaySpeed={3000} className="slider">
                    <Card key={1} img1="/resources/images/ClientsTestimonial0.png" />
                    <Card key={2} img1="/resources/images/ClientsTestimonial1.png" />
                    <Card key={3} img1="/resources/images/ClientsTestimonial2.png" />
                </Slider>
                <Arrow style={{ textAlign: "center" }}>
                    <img className="arrow" onClick={this.next} src="/resources/images/forwardarrow.png" alt="forwardarrow"/>
                </Arrow>
            </div>
        )
    }  
}


const Card = ({img1}) => {
    return (
        <div className="testimonial">
            <img src={img1} alt="client-testimonial" className="client-testimonial"/>
        </div>
    )
}

const Arrow = styled.div`
    .arrow {
        height:60px;
        cursor:pointer;
    }
    .back {
        margin-right:20px;
    }
    @media only screen and (max-width: 610px) {
        .arrow {
            display:none;
        }
    }
`
