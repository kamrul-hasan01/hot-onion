import { Button, Col, Container, Image, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';

import useItem from '../hooks/useItem';

const ItemDetails = () => {
    let { name } = useParams();

    const { data, addtoCart } = useItem();
    if (!data) {
        return <Spinner animation="border" variant="primary" />
    }

    const result = data.find(item => item.title === name)


    return (
        <Container>
            <Row className="pt-5">
                <Col md={6} className="text-start mt-5 pt-5">
                    <h4 className="  pt-1">{result?.title}</h4>
                    <p className="fs-5">{result?.detail}</p>
                    <Row>
                        <Col xs={3}><p className="fs-2 fw-bolder">$ {result?.price}</p></Col>

                    </Row>
                    <Button variant="danger" className="fs-4" onClick={() => { addtoCart(name, result?.price, result?.image) }}><i className="fas fa-shopping-cart pe-3 fs-4"></i> ADD</Button>

                </Col>
                <Col md={6} className="px-5">
                    <Image src={result?.image} rounded fluid className="p-5" />
                </Col>
            </Row>
        </Container>
    );
};

export default ItemDetails;