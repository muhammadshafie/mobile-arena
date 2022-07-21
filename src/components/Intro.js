import { Col, Container, Row, Button } from 'react-bootstrap'

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex text-center justify-content-center align-items center'>
                <Row>
                    <Col>
                    <div className='title'>WHAT IS THE</div>
                    <div className='title'>BEST SMARTPHONE</div>
                    <div className='title'>FOR YOU ?</div>
                    <div className='introButton mt-4 text-center'>
                        <Button variant="dark" href='#trending'>Let's Explore</Button>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro