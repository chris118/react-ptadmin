import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

export default function author(WrappedComponent) {
    class AuthInterceptor extends Component {

        componentWillMount() {
            const isLoggedIn = !!window.localStorage.getItem("uid");
            if(!isLoggedIn){
                this.props.history.replace('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    return withRouter(AuthInterceptor);
}

