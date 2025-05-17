import React from 'react'
import './Review.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div>
        <Row className='back-color ms-0'>
            <Col xs={3} md={3} sm={1} className='my-5'>
                <img src={require('./img/j1.png')} className="logo3"/><br/><br/>
                <p>Bronza design jewelry secializes in custom design<br/>european style jewelry that features the highest.</p>
                <h5 style={{color:'rgb(207, 112, 49)',fontSize:'25px'}}>Visit our store</h5>
                <h5 className='text-color'><span style={{color:'rgb(207, 112, 49)'}}>Mon - Sat :</span> 9AM - 10PM</h5>
                <h5 className='text-color'><span style={{color:'rgb(207, 112, 49)'}}>Sun :</span> Closed</h5>
            </Col>
            <Col xs={3} md={3} sm={1} className='my-5'>
                <h5 style={{color:'rgb(207, 112, 49)',fontSize:'25px'}}>Information</h5><br/>
                <h6>About Us</h6>
                <h6>Contact Us</h6>
                <h6>Product</h6>
                <h6>News</h6>
                <h6>Review</h6>
            </Col>
            <Col xs={3} md={3} sm={1} className='my-5'>
                <h5 style={{color:'rgb(207, 112, 49)',fontSize:'25px'}}>Quick links</h5><br/>
                <h6>About Us</h6>
                <h6>Contact Us</h6>
                <h6>Return Policy</h6>
                <h6>Privacy Policy</h6>
                <h6>Payment Policy</h6>
            </Col><Col xs={3} md={3} sm={1} className=' my-5'>
                <h5 style={{color:'rgb(207, 112, 49)',fontSize:'25px'}}>Help</h5><br/>
                <h6>Return Policy</h6>
                <h6>Privacy Policy</h6>
                <h6>Payment Policy</h6>
                <h6>Terms & condition</h6>
                <h6>Our story</h6>
            </Col>
            <hr/>
            <h6 className='text-center'>&copy; Ecommerce by qodexTM</h6>
        </Row>
    </div>
  )
}

export default Footer