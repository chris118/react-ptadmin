import React, {Component} from 'react';
import './index.css';
import {Layout} from 'antd';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <div>Home</div>
      </Layout>

    );
  }
}

export default Home;