import React, { Component } from 'react';
import {
    Grid,
    Row,
    Button,
    Form,
    FormControl,
    FormGroup,
    Col,
    ControlLabel,
    Checkbox} from 'react-bootstrap';

import './index.css';

class Login extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} sm={2}>
                                    邮件
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email" />
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword">
                                <Col componentClass={ControlLabel} sm={2}>
                                    密码
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password" />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>记住我</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                        登录
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;