import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Follow() {
    return (
        <div id="Follow">
            <Container>
                <Row className='text-center my-5 px-0'>
                    <Col xs={12}>
                        <h1 className='text-center'>
                            <span style={{ color: 'rgb(207, 112, 49)' }}>Follow</span> Us
                        </h1>
                    </Col>
                </Row>

                <Row className='my-6'>
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f1.png')} style={{width:'100%'}}/>
                    </Col> 
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f2.png')} style={{width:'100%'}}/>
                    </Col>
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f3.png')} style={{width:'100%'}}/>
                    </Col>
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f4.png')} style={{width:'100%'}}/>
                    </Col>
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f5.png')} style={{width:'100%'}}/>
                    </Col>
                    <Col xs={4} sm={3} md={2}>
                        <img src={require('./img/f6.png')} style={{width:'100%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Follow