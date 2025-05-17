import React from 'react'
import './Product.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

function Product() {
  return (
    <div id='Product'>
      <Container>
        <Row className='text-center my-6'>
          <Col xs={12}>
            <h1 className='text-center'><span style={{ color: 'rgb(207, 112, 49)' }}>Trending</span> Product</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={12} sm={4}>
            <CardGroup className='my-5' >
              <Card className='m-4 border-0 bg-color'>
                <div className="image-container">
                  <Card.Img src={require('./img/j10.png')} className='logo2' />
                  <div className="hover-buttons">
                    <button className="hover-btn"><FontAwesomeIcon icon={faHeart}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faEye}/></button>
                  </div>
                </div>
                <hr />
                <Card.Body className='text-center'>
                  <Card.Title>Shinrai collar necklace</Card.Title>
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <Card.Title>$280.00</Card.Title>
                </Card.Body>
              </Card>
              <Card className='m-4 border-0 bg-color'>
                <div className="image-container">
                  <Card.Img src={require('./img/j11.png')} className='logo2' />
                  <div className="hover-buttons">
                    <button className="hover-btn"><FontAwesomeIcon icon={faHeart}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faEye}/></button>
                  </div>
                </div>
                <hr />
                <Card.Body className='text-center'>
                  <Card.Title>Exie twister bangle</Card.Title>
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <Card.Title>$341.00</Card.Title>
                </Card.Body>
              </Card>
              <Card className='m-4 border-0 bg-color'>
                <div className="image-container">
                  <Card.Img src={require('./img/j12.png')} className='logo2' />
                  <div className="hover-buttons">
                    <button className="hover-btn"><FontAwesomeIcon icon={faHeart}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faEye}/></button>
                  </div>
                </div>
                <hr />
                <Card.Body className='text-center'>
                  <Card.Title>Charm ear climbers</Card.Title>
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <Card.Title>$268.00</Card.Title>
                </Card.Body>
              </Card>
              <Card className='m-4 border-0 bg-color'>
                <div className="image-container">
                  <Card.Img src={require('./img/j13.png')} className='logo2' />
                  <div className="hover-buttons">
                    <button className="hover-btn"><FontAwesomeIcon icon={faHeart}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faCartShopping}/></button>
                    <button className="hover-btn"><FontAwesomeIcon icon={faEye}/></button>
                  </div>
                </div>
                <hr />
                <Card.Body className='text-center'>
                  <Card.Title>Zaya stud earrings</Card.Title>
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <FontAwesomeIcon icon={faStar} className="icon1" />
                  <Card.Title>$225.00</Card.Title>
                </Card.Body>
              </Card>

            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Product;