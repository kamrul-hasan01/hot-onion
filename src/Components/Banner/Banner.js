import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-bg py-5">
            <Container>
                <Row className="py-5">
                    <Col xs={12} >
                        <h1 className="pt-5">Best food waiting for your belly</h1>
                        <div className="d-flex justify-content-center my-3 pb-5">
                            <InputGroup className="mb-3 w-50" size="lg">
                                <FormControl
                                    placeholder="Search food items"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    className="bg-light"
                                />
                                <Button variant="danger">Search</Button>

                            </InputGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;