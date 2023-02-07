import "slick-carousel/slick/slick-theme.css";
import "./client.css";
import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default class MobileClientslider extends Component {
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
            <div className="mobile-slider">
                <Slider className="mob-slider" ref={c => (this.slider = c)} {...settings} autoplay autoplaySpeed={3000} >
                    <Card key={1} img1="/resources/images/ClientsTestimonial0P.png"/>
                    <Card key={2} img1="/resources/images/ClientsTestimonial1P.png"/>
                    <Card key={3} img1="/resources/images/ClientsTestimonial2P.png"/>
                </Slider>
            </div>
        )
    }  
}


const Card = ({img1}) => {
    return (
        <div className="mobile-testimonial">
            <img src={img1} alt="client-testimonial" className="mobile-client-testimonial"/>
        </div>
    )
}
