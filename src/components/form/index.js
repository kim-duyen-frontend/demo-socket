import React, { useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ModalRegister from '../modal';
import { loginUser } from '../../redux/apiRequest';

function FormLogin() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = (event) => {
        event.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        console.log(newUser);
        loginUser(newUser, dispatch, navigate);
    }
    return (
        <>
            <Card className="p-3">
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
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