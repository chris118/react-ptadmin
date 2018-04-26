import React, {Component} from 'react';
import './index.css';

import {Layout, Breadcrumb} from 'antd';
import Header from '../../components/Header'
import SiderBar from '../../components/SiderBar'
import Home from '../Home'

const {Content, Footer} = Layout;

class RootLayout extends Component {
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <SiderBar/>
        <Layout>
          <Header/>
          <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{background: 'blue'}}>
              <Home/>
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>
            ptadmin ©2018 Created by Chris
          </Footer>
        </Layout>
      </Layout>

    );
  }
}

export default RootLayout;
