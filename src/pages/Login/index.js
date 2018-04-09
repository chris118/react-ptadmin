import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';

import './index.css';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) { //校验通过
        // 添加请求拦截器
        axios.interceptors.request.use(function (config) {
          config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
          if(config.method === 'post') {
            config.data = qs.stringify( {
              ...config.data
            })
          }
          return config;
        }, function (error) {
          return Promise.reject(error);
        });


        const _this=this;
        axios.post('http://127.0.0.1:4000/api/login',{
          name: values.username,
          password: values.password
        })
        .then(function(res){
          if(res.status === 200 && res.data.code === 200){
            if(!!res.data.data.uid){
              window.localStorage['pt-uid'] = res.data.data.uid;
              _this.props.history.replace('/home');
            }else {
              //提示错误
            }
          }
        })
        .catch(function(error){
          console.log(error);
        });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="center-div">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '用户名不能为空!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     placeholder="用户名"
                     name="username"
                     />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '密码不能为空!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     type="password"
                     placeholder="密码"
                     name="password"
                     />
            )}
          </FormItem>
          <FormItem>
            {/*{getFieldDecorator('remember', {*/}
              {/*valuePropName: 'checked',*/}
              {/*initialValue: true,*/}
            {/*})(*/}
              {/*<Checkbox>Remember me</Checkbox>*/}
            {/*)}*/}
            {/*<a className="login-form-forgot" href="">Forgot password</a>*/}

            {/*<Alert type="error" message="Error text" />*/}

            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {/*<a href="">register now!</a>*/}

          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Login);