import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Category.css';

function Category() {
    return (
        <div id='Category'>
            <Container>
                <Row className='text-center my-6'>
                    <Col><h1><span style={{ color: 'rgb(207, 112, 49)' }}>Shop By</span> Category</h1></Col>
                </Row>
            </Container>
            <CardGroup style={{width:'95%',marginLeft:'2%'}}>
                <Card>
                    <Card.Img src={require('./img/j3.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>12+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Round brilliant</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img src={require('./img/j4.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>11+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Diamond shape</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img src={require('./img/j5.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>9+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Thumb Ring</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img src={require('./img/j6.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>10+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Bevel corner</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img src={require('./img/j7.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>10+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Owl shape</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img src={require('./img/j8.png')} className='logo1'/>
                    <Card.Body>
                        <Card.Title className='text-center'>9+ Items</Card.Title>
                    </Card.Body>
                    <Card.Footer style={{textAlign:'center',fontSize:'22px'}}>
                        <small className="text-muted">Radiant cut</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <Container>
                <Row className='my-7' style={{width:'110%'}}>
                    <Col xs={6}>
                        <img src={require('./img/j9.png')} style={{width:'100%'}}/>
                    </Col>
                    <Col xs={6}  className='my-7'>
                        <h4 style={{color:'rgb(207, 112, 49)',fontSize:'16px'}}>Radiant gemstone beauty.</h4>
                        <h2>Jewels that celebrate your unique beauty and style..</h2>
                        <h4 style={{fontSize:'15px',color:'rgb(169, 164, 162)'}}>We believe in creating jewellery that lasts. Each piece is made from 
                            high-quality materials, ensuring durability and timeless beauty. Our 
                            commitment to excellence means you can wear your favourite pieces with 
                            confidence, knowing they’ll withstand the test of time.</h4><br/>
                            <button className='button'>SEE MORE</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category;