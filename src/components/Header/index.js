import React, {Component} from 'react';
import './index.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {withRouter} from "react-router-dom";
import {Layout, Icon, Row, Col, Avatar, Dropdown, Menu} from 'antd';
import {toggleSider} from '../../actions/header'
import {KEY_UID} from '../../utils/constants'

const {Header} = Layout;

class PTHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });

    // 由 react-redux 注入：
    let { toggleSiderAction } = this.props;
    toggleSiderAction(!this.state.collapsed)
  }

  logout = () => {
    const {history} = this.props
    window.localStorage.removeItem(KEY_UID);
    history.replace('/login');
  }

  render() {
    return (
      <Header style={{background: '#fff', padding: 0, display: 'flex'}}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Row type="flex" justify="end" align="middle" style={{width: '100%', padding: '0px 50px 0px'}}>
          <Col>
            <Dropdown overlay={
              <Menu>
                <Menu.Item>
                  <a>设置</a>
                  <a onClick={this.logout}>注销</a>
                </Menu.Item>
              </Menu>
            }>
              <a className="ant-dropdown-link" href="#">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        style={{ backgroundColor: '#1DA57A' }}
                        icon="user" />
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
    );
  }
}


function mapDispatchToProps(dispatch) {
  //react-redux 注入 actions 到 this.props
  // 不需要store.dispatch, 解耦store
  return {
    toggleSiderAction: bindActionCreators(toggleSider, dispatch),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(PTHeader));