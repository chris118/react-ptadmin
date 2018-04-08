import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log('在发送请求之前做些什么');
      // config.headers = {
      //   'Content-Type': 'application/x-www-from-urlencoded'
      // }

      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      if(config.method === 'post') {
        config.data = qs.stringify( {
          ...config.data
        })
      }
      console.log(config.data);
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });


    axios.post('http://127.0.0.1:4000/api/login',{
      name: this.state.name,
      password: this.state.password
    })
    .then(function(res){
      console.log(res);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  render() {
    return (
      <Grid className="container-fluid">
        <Row>
          <Col md={4}/>
          <Col md={4} className="vertical-center-col" >
            <Form horizontal onSubmit={this.handleSubmit}>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} md={12}>
                  账户
                </Col>
                <Col md={12}>
                  <FormControl
                    name="name"
                    value={this.state.name}
                    type="text"
                    placeholder="Account"
                    onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} md={12}>
                  密码
                </Col>
                <Col md={12}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}/>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col mdOffset={2} md={12}>
                  <Checkbox> 记住我</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col mdOffset={2} md={12}>
                  <Button bsStyle="primary" type="submit">
                    登录
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col md={4}/>
        </Row>
      </Grid>
    );
  }
}

export default Login;