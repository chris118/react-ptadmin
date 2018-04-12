import React, {Component} from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {Post} from '../../service'
import {message} from 'antd';
import {KEY_UID} from '../../utils/constants'
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

        window.localStorage[KEY_UID] = 10000;
        this.props.history.replace('/');

        return

        const _this = this;
        Post('/login', {
          name: values.username,
          password: values.password
        })
          .then(function (res) {
            console.log(res);
            if (res.code === 200) {
              if (!!res.data.uid) {
                window.localStorage[KEY_UID] = res.data.uid;
                _this.props.history.replace('/');
              } else {
                //提示错误
                message.error("用户名密码错误");
              }
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="center-div">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, message: '用户名不能为空!'}],
            })(
              <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                     placeholder="用户名"
                     name="username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, message: '密码不能为空!'}],
            })(
              <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
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