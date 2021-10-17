import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import DisplayItem from '../DisplayItem/DisplayItem';

const Lunch = () => {
    const [lunch, setLunch] = useState([]);

    useEffect(() => {
        fetch('./lunchItem.json')
            .then(res => res.json())
            .then(data => {
                setLunch(data)
            })
    }, [])

    return (
        <div>
            <Container className="animate__animated animate__pulse">
                <h1 className="fs-1 py-3">Lunch</h1>

                <Row xs={1} md={3}>

                    {
                        lunch.length ? lunch.map(food => <DisplayItem
                            key={food.id}
                            food={food}
                        ></DisplayItem>)
                            : <Spinner animation="border" variant="info" />
                    }

                </Row>
            </Container>
        </div >
    );
};

export default Lunch;