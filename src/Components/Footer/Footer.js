import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import logo from '../../img/logo.png'

const Footer = () => {
    const element = <FontAwesomeIcon icon={faCopyright} />
    return (
        <div className="bg-dark text-white">
            <Container>
                <Row className="pt-4 text-start fs-5">
                    <Col md={6} >
                        <Image src={logo} fluid style={{ width: "30%" }} />
                    </Col>
                    <Col md={6}>
                        <Row>
                            <Col md={6}>
                                <p className="pb-0 mb-0">About Online food</p>
                                <p className="pb-0 mb-0">Read our blog</p>
                                <p className="pb-0 mb-0">Sign up to deliver</p>
                                <p>Add your restaurant</p>
                            </Col>
                            <Col md={6} >
                                <p className="pb-0 mb-0">Get help</p>
                                <p className="pb-0 mb-0">Read FAQs</p>
                                <p className="pb-0 mb-0">View all cities</p>
                                <p>Restaurant near me</p>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row className="py-4">
                    <Col md={6}>
                        <p className="text-start text-muted">Copyright {element} 2021 food</p>
                    </Col>
                    <Col md={2}>Privacy Policy</Col>
                    <Col md={2}>Terms of Use</Col>
                    <Col md={2}>Pricing</Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;