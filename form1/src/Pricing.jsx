// src/components/PricingPlans.js
import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import specific Bootstrap components

const Pricing = () => {
    return (
        <div className="container">
            <div className="row">
                {/* Standard Plan */}
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Standard</Card.Title>
                            <Card.Text>
                                One end product
                                No attribution required
                                TypeScript
                                Figma Design Resources
                                Create multiple products
                                Create a SaaS project
                            </Card.Text>
                            <Button variant="primary">Start Free Trial</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Standard Plus Plan */}
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Standard Plus</Card.Title>
                            <Card.Text>
                                One end product
                                No attribution required
                                TypeScript
                                Figma Design Resources
                                Create multiple products
                                Create a SaaS project
                                Resale product
                                Separate sale of UI elements
                            </Card.Text>
                            <Button variant="success">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Extended Plan */}
                <div className="col-md-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Extended</Card.Title>
                            <Card.Text>
                                One end product
                                No attribution required
                                TypeScript
                                Figma Design Resources
                                Create multiple products
                                Create a SaaS project
                                Resale product
                                Separate sale of UI elements
                            </Card.Text>
                            <Button variant="danger">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
