import React from 'react';
import { Col } from 'react-bootstrap';
import FormLogin from '../../components/form';
import "./styles.scss";

function LoginUser() {
    return (
        <div className="loginUser">
            <div className="d-flex justify-content-center align-items-center h-100">
                <Col sm={6} lg={3}>
                    <FormLogin />
                </Col>
            </div>
        </div>
    );
}

export default LoginUser;