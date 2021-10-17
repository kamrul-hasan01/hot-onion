import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

import './DisplayItem.css'

const DisplayItem = ({ food }) => {
    let history = useHistory();

    const { title, detail, image, price } = food;
    const itemdetails = (name) => {

        history.push(`/itemdetails/${name}`);

    }
    return (
        <Col className="px-5 py-3">
            <Card className="border-0 custom-shadow" onClick={() => { itemdetails(title) }}>
                <Card.Img variant="top" src={image} className="px-4" />
                <Card.Body className="pt-0">
                    <Card.Title>{title.slice(0, 16)}</Card.Title>
                    <Card.Text>
                        {detail.slice(0, 27)}
                    </Card.Text>
                </Card.Body>
                <p className="fs-5 fw-bolder"> $ {price}</p>
            </Card>
        </Col>
    );
};

export default DisplayItem;