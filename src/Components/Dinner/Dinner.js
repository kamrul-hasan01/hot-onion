import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import DisplayItem from '../DisplayItem/DisplayItem';


const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect(() => {
        fetch('./dinneritem.json')
            .then(res => res.json())
            .then(data => {
                setDinner(data)
            })
    }, [])
    return (
        <div>
            <Container className="animate__animated animate__pulse">
                <h1 className="fs-1 py-3">Dinner</h1>

                <Row xs={1} md={3}>

                    {
                        dinner.length ? dinner.map(food => <DisplayItem
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

export default Dinner;