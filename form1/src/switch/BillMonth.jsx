import React from 'react'
import { Card, Button, Form } from 'react-bootstrap';
const BillMonth = () => {
    return (
        <div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Card>
                                {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}

                                <Card.Body>
                                    <Card.Title>Card 1</Card.Title>
                                    <Card.Text>
                                        This is a sample card. You can add any content here.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>
                                        This is another sample card. You can customize it as per your needs.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                {/* <Card.Img variant="top" src="https://via.placeholder.com/150" /> */}
                                <Card.Body>
                                    <Card.Title>Card 3</Card.Title>
                                    <Card.Text>
                                        This is the third card. You can add more cards as needed.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BillMonth
