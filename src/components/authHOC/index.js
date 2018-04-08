import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

export default function author(WrappedComponent) {
  class AuthInterceptor extends Component {

    componentWillMount() {
      console.log(window.localStorage.getItem("uid"));
      const isLoggedIn = !!window.localStorage.getItem("pt-uid");
      if (!isLoggedIn) {
        this.props.history.replace('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return withRouter(AuthInterceptor);
}

