import React from 'react';
import { Container, Image } from 'react-bootstrap';
import notfoundPic from '../../img/pagenotfound.jpg'

const PageNotFound = () => {
    return (
        <Container>
            <Image src={notfoundPic} rounded fluid />
        </Container>

    );
};

export default PageNotFound;