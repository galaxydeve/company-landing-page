import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
import { ClientsReviews } from './ClientsReviewDatabase';

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        }
    ]
};

const HappyClients = () => (
    <section className="agency testimonial format testimonial-bg" id='results'>
        <Container>
            <Row>
                <Col md="5">
                    <div className="format-container m-b-50 m-t-20">
                        <h6 className="borders-before">
                            <span>Our Results</span>
                        </h6>
                        <div className="format-head-text">
                            <h2 className=" text-white">You Are Not The First,  <span className="block-span text-white">We Have A Track Record Of Success</span></h2>
                        </div>
                        <h1 className='text-white'>2500+</h1>

                        <span className='text-white'>Happy Clients</span>

                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme testimonial-slider" {...settings}>
                        {ClientsReviews.length > 0 ?
                            ClientsReviews.map((item, index) =>
                                <div className="item" key={`testimonial-${index}`}>
                                    <div className="testimonial-container testimonial-container2 m-0">
                                        <div className="d-flex align-items-center">
                                            <img alt="" className="img-fluid m-r-25" src={item.photo} />
                                            <div className="center-content">
                                                <h6 className="name">{item.name}</h6>
                                                <h6 className="post font-primary">{item.role}</h6>
                                            </div>
                                        </div>
                                        <div className="testimonial-info">
                                            <p className="m-b-20 para2">
                                                {item.details}
                                            </p>
                                            <div className="primary-border"></div>
                                        </div>
                                    </div>
                                </div>
                            ) :
                            'No Testimonial Found'}
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)

export default HappyClients;