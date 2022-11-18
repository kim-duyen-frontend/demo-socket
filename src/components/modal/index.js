import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { registerUser } from '../../redux/apiRequest';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

function ModalRegister({ show, handleClose }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password
        }
        registerUser(newUser, dispatch, navigate);
    }
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Form Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter username"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </Form.Group>
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
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleRegister}>
                    Register
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalRegister;