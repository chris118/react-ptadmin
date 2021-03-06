import React, {Component} from 'react';
import './index.css';
import {Layout, Menu, Icon} from 'antd';
import { connect } from 'react-redux'

const {SubMenu} = Menu;
const {Sider} = Layout;

class SiderBar extends Component {
  render() {
    // 根据collapsed状态设置logo大小
    var logoStyle = this.props.collapsed ? {width: '60px'} : {width: '120px'}

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <div className="logo" style={logoStyle}>
          logo
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Icon type="pie-chart"/>
            <span className="title">首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop"/>
            <span className="title">数据报表</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user"/><span>User</span></span>}
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="team"/><span>Team</span></span>}
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file"/>
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state) // state === reducer
  return {
    collapsed: state.header.collapsed, //collapsed属性由Header子组件的Action出发改变
  };
};

export default connect(mapStateToProps)(SiderBar);