import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalRegister from '../modal';
import { loginUser } from '../../redux/apiRequest';
import { ToastContainer, toast } from "react-toastify";

function FormLogin() {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const notify = useSelector((state) => state.auth.login.currentUser);
    const auth = useSelector((state) => state.auth.login.auth);
    // console.log(auth);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogin = (event) => {
        event.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch);
    }
    useEffect(() => {
        if (auth === true) {
            toast.success(notify?.message);
        }
    }, [auth])
    useEffect(() => {
        const timer = setTimeout(() => {
            if (notify) {
                navigate("/home")
            }
        }, 12000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notify])
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
            <ToastContainer className="toast-position"
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default FormLogin;