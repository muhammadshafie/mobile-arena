import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import iphoneImage from '../assets/images/phones/ip3.jpg';
import nothingImage from '../assets/images/phones/np1.jpg';
import onePlusImage from '../assets/images/phones/op2t.jpg';
import rogImage from '../assets/images/phones/rog6pro.jpg';
import samsungImage from '../assets/images/phones/s22.jpg';
import xiaomiImage from '../assets/images/phones/xiaomi-12s-ultra.jpg';

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white' id="trending">TRENDING MOBILE PHONES</h1>
                <br />
                <Row>
                    <Col md={4} className="mobileWrapper" >
                        <Card className="mobileImage">
                            <Image src={iphoneImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Iphone 13 Pro Max</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 months ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={samsungImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Samsung S22 Ultra</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 27 days ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={xiaomiImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Xiaomi 12S Ultra</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 15 hours ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={rogImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Asus ROG Phone 6 Pro</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 23 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={onePlusImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>OnePlus Node 2T</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 weeks ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={nothingImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Nothing Phone (1)</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 days ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Trending