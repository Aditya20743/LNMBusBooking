import React, { Component } from "react";
import Home from "./HomeComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import RequestSpecialBusComponent from "./RequestSpecialBusComponent";
import RequestOutpassComponent from "./RequestOutpassComponent";
import AddBusComponent from "./AddBusComponent";
import RemoveBusComponent from "./RemoveBusComponent";
import UpdateScheduleComponent from "./UpdateScheduleComponent";
import ApproveOutpassComponent from "./ApproveOutpassComponent";
import SelectBusComponent from "./SelectBusComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { loginUser, googleLogin, logoutUser } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  googleLogin: () => dispatch(googleLogin()),
});

class Main extends Component {
  render() {
    return (
      <div>
        <Header
          auth={this.props.auth}
          loginUser={this.props.loginUser}
          googleLogin={this.props.googleLogin}
          logoutUser={this.props.logoutUser}
        />
        <TransitionGroup>
          <CSSTransition classNames="page" timeout={300}>
            <Switch>

              <Route
                path="/home"
                component={() => (
                  <Home
                    auth={this.props.auth}
                    loginUser={this.props.loginUser}
                    googleLogin={this.props.googleLogin}
                  />
                )}
              />
              <Route
                path="/requestSpecialBus"
                component={() => <RequestSpecialBusComponent />}
              />
              <Route
                path="/requestOutpass"
                component={() => <RequestOutpassComponent />}
              />
              <Route path="/addBus" component={() => <AddBusComponent />} />
              <Route
                path="/removeBus"
                component={() => <RemoveBusComponent />}
              />
              <Route
                path="/updateSchedule"
                component={() => <UpdateScheduleComponent />}
              />
              <Route
                path="/approveOutpass"
                component={() => <ApproveOutpassComponent/>}
                />
              <Route
                path="/selectBus"
                component={() => <SelectBusComponent />}
                />
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
