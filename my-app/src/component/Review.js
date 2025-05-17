import React from 'react'
import './Review.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel';

function Review() {
    return (
        <div id="Review">
            <Container>
                <Row className='text-center my-5 px-0'>
                    <Col xs={12}>
                        <h1 className='text-center'>
                            <span style={{ color: 'rgb(207, 112, 49)' }}>Customer</span> review
                        </h1>
                    </Col>
                </Row>

                {/* controls={false}= hides the left/right arrows  
                    indicators={true}= (optional) show the little navigation dots.*/}
                <Carousel>
                    <Carousel.Item>
                        <Row>
                            <Col md={6} className='my-5 px-4'>
                                <Row className='border'>
                                    <Col xs={6} className="ps-0">
                                        <img src={require('./img/j14.png')} style={{ width: '100%', height: '100%' }} alt="review" />
                                    </Col>
                                    <Col xs={6} className="text-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon0" />
                                        <p className='fs-5 text-color'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" /><br />
                                        <img src={require('./img/p1.png')} style={{ borderRadius: '120px', width: '100px', marginTop: '10px' }} />
                                        <p className='fs-5 fw-bold'>Emily Wilson</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className='my-5 px-4'>
                                <Row className='border'>
                                    <Col xs={6} className="ps-0">
                                        <img src={require('./img/j15.png')} style={{ width: '100%', height: '100%' }} alt="review" />
                                    </Col>
                                    <Col xs={6} className="text-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon0" />
                                        <p className='fs-5 text-color'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" /><br />
                                        <img src={require('./img/p2.png')} style={{ borderRadius: '120px', width: '100px', marginTop: '10px' }} />
                                        <p className='fs-5 fw-bold'>Audie dewey</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Carousel.Item>

                    <Carousel.Item>
                        <Row>
                            <Col md={6} className='my-5 px-4'>
                                <Row className='border'>
                                    <Col xs={6} className="ps-0">
                                        <img src={require('./img/j16.png')} style={{ width: '100%', height: '100%' }} alt="review" />
                                    </Col>
                                    <Col xs={6} className="text-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon0" />
                                        <p className='fs-5 text-color'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" /><br />
                                        <img src={require('./img/p3.png')} style={{ borderRadius: '120px', width: '100px', marginTop: '10px' }} />
                                        <p className='fs-5 fw-bold'>Brittany Jones</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6} className='my-5 px-4'>
                                <Row className='border'>
                                    <Col xs={6} className="ps-0">
                                        <img src={require('./img/j17.png')} style={{ width: '100%', height: '100%' }} alt="review" />
                                    </Col>
                                    <Col xs={6} className="text-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} className="icon0" />
                                        <p className='fs-5 text-color'>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" />
                                        <FontAwesomeIcon icon={faStar} className="icon1" /><br />
                                        <img src={require('./img/p4.png')} style={{ borderRadius: '120px', width: '100px', marginTop: '10px' }} />
                                        <p className='fs-5 fw-bold'>David williams</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>

            </Container>
        </div>
    )
}

export default Review