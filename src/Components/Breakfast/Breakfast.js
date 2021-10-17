import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import DisplayItem from '../DisplayItem/DisplayItem';

const Breakfast = () => {
    const [breakfast, setBreakfast] = useState([]);
    useEffect(() => {
        fetch('./breakfastitem.json')
            .then(res => res.json())
            .then(data => {
                setBreakfast(data)

            })
    }, [])
    return (
        <div>
            <Container className="animate__animated animate__pulse">
                <h1 className="fs-1 py-3">Breakfast</h1>
                <Row xs={1} md={3}>

                    {
                        breakfast.length ? breakfast.map(food => <DisplayItem
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

export default Breakfast;