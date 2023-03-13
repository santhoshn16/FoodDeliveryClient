import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const MenuItem = props => {
    console.log(props.items);

    return (
        <Row xs={1} md={3} className="g-4">
            {props.items.map((i) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>{i.name}</Card.Title>
                            <Card.Text>
                                {i.description}
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer>Price : {i.price}</Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
};


export default MenuItem;