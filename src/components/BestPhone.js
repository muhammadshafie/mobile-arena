import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import iphoneImage from '../assets/images/phones/ip13pro.jpg';
import nothingImage from '../assets/images/phones/np1.jpg';
import onePlusImage from '../assets/images/phones/op10pro.jpg';
import pixelImage from '../assets/images/phones/pixel6pro.jpg';
import samsungImage from '../assets/images/phones/s22.jpg';
import xiaomiImage from '../assets/images/phones/xiaomi-note-11.jpg';

const BestPhone = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='text-white' id="bestphone">BEST MOBILE PHONES</h1>
                <br />
                <Row>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={iphoneImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Iphone 13 Pro</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 3 hours ago</Card.Text>
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
                                    <Card.Text className='text-left'>Last updated 18 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={xiaomiImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Xiaomi Redmi Note 11</Card.Title>
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
                            <Image src={pixelImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>Pixel 6 Pro</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 27 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="mobileWrapper">
                        <Card className="mobileImage">
                            <Image src={onePlusImage} alt="Iphone Models" className='images' />
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className='text-center'>OnePlus 10 Pro</Card.Title>
                                    <Card.Text className='text-left'>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content.
                                    </Card.Text>
                                    <Card.Text className='text-left'>Last updated 7 months ago</Card.Text>
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

export default BestPhone