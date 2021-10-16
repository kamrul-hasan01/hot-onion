import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import waiter from '../../img/Image/adult-blur-blurred-background-687824.png'
import delivery from '../../img/Image/architecture-building-city-2047397.png'
import cooker from '../../img/Image/chef-cook-food-33614.png'
import './Choose.css'

const Choose = () => {
    return (
        <div>
            <Container className="py-5 mt-3">
                <Row >
                    <Col xs={12}>
                        <h1 className="text-start">Why you choose us</h1>
                        <p className="text-start fs-5">Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded. </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Image src={waiter} rounded fluid />
                        <Row className="pt-3">
                            <Col xs={3} className="pt-3">

                                <i className="fas fa-car fs-1 bg-danger text-white p-2 font-radius"></i>

                            </Col>
                            <Col xs={9} className="text-start">
                                <h5>Fast Delevery</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                <p className="text-primary fs-5">See more  <span><i className="fas fa-arrow-alt-circle-right ps-2 text-success"></i></span></p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <Image src={cooker} rounded fluid />
                        <Row className="pt-3">
                            <Col xs={3} className="pt-3">
                                <i className="fas fa-history fs-1 bg-danger text-white p-2 font-radius"></i>

                            </Col>
                            <Col xs={9} className="text-start">
                                <h5>A Good Auto Responder</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                <p className="text-primary fs-5">See more  <span><i className="fas fa-arrow-alt-circle-right ps-2 text-success"></i></span></p>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={4}>
                        <Image src={delivery} rounded fluid />
                        <Row className="pt-3">
                            <Col xs={3} className="pt-3">
                                <i className="fas fa-truck  fs-1 bg-danger text-white p-2 font-radius"></i>
                            </Col>
                            <Col xs={9} className="text-start">
                                <h5>A Good Auto Responder</h5>
                                <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                                <p className="text-primary fs-5">See more  <span><i className="fas fa-arrow-alt-circle-right ps-2 text-success"></i></span></p>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Choose;