import React, {Component} from 'react';
import './index.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Layout, Icon, Row, Col} from 'antd';
import {toggleSider, logout} from '../../actions/header'

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
    // 由 react-redux 注入：
    let { logoutAction } = this.props;
    logoutAction(true)
  }

  render() {
    return (
      <Header style={{background: '#fff', padding: 0, display: 'flex'}}>
        <Icon
          className="trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <Row type="flex" justify="end" align="middle" style={{width: '100%', padding: '0px 20px 0px'}}>
          <Col>
            <a onClick={this.logout}>
              登出
            </a>
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
    logoutAction: bindActionCreators(logout, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(PTHeader);