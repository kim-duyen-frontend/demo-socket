import React, { useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import { Link } from "react-router-dom"
import ModalRegister from '../modal';
function FormLogin() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className="p-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Col className="d-flex justify-content-end">
                        <Link to="/" onClick={handleShow}>Sign up account</Link>
                    </Col>
                    <div className="d-grid mt-3">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </Card>
            <ModalRegister show={show} handleClose={handleClose} />
        </>
    );
}

export default FormLogin;