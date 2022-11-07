import React, { Component } from 'react'
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { loginUser, googleLogin } from '../redux/ActionCreators';
import {Login} from '../Login';


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    googleLogin: () => dispatch(googleLogin())
});

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <Login /> */}
                <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={() => <Home />} />
                            <Redirect to="/home" />
                            {/* {this.props.loginUser({username:"admin1@admin.com",password: "password"})}; */}
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));