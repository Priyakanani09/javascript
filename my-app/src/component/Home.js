import React from 'react'
import './Navigation.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <div id='Home'>
        <Row>
            <Col xs={12}>
                    <Card className="bg-dark text-white md-3">
                        <Card.Img src={require('./img/j2.png')} className='blur' />
                        <Card.ImgOverlay className='text'>
                            <Card.Title>Glimmering dreams</Card.Title>
                            <Card.Text className='font'>Treasure moments,<br />wear memories.</Card.Text>
                            <button className='button1'>Shop Now</button>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
        </Row>
    </div>
  )
}

export default Home