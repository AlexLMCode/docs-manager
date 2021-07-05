import React from 'react';
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

const CardComponent = ({name, total, to}) => {
    return (
        <Link to={to}>
            <Card
                bg='primary'
                key={1}
                text='light'
                style={{width: '18rem'}}
                className="mb-5 mx-auto"
            >
                <Card.Header className='text-center fw-bold'>{name}</Card.Header>
                <Card.Body className='mx-auto'>

                    <Card.Title> Total: {total} </Card.Title>
                    {/*<Card.Text>*/}
                    {/*    Some quick example text to build on the card title and make up the bulk*/}
                    {/*    of the card's content.*/}
                    {/*</Card.Text>*/}
                </Card.Body>
            </Card>
        </Link>
    );
};

export default CardComponent;