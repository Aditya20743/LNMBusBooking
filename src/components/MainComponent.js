import React, { Component } from 'react'
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        // auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    // loginUser: (creds) => dispatch(loginUser(creds)),
    // logoutUser: () => dispatch(logoutUser()),
    // googleLogin: () => dispatch(googleLogin())
});

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={() => <Home/>} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));