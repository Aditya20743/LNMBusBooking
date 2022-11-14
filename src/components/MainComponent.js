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
import ViewTripsComponent from "./ViewTripsComponent";
import ApproveBusReqComponent from "./ApproveBusReqComponent";
import WalletComponent from "./WalletComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  loginUser, googleLogin, logoutUser, postBus, postOutpass, postStore, postTicket, postWallet, fetchStore, deleteBus, postSpecialBusRequest,
  deleteSpecialBusRequest, postSchedule, fetchSchedule, updateSchedule, updateTicket,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    bus: state.bus,
    outpass: state.outpass,
    store: state.store,
    ticket: state.ticket,
    wallet: state.wallet,
    schedule: state.schedule,
    specialbusrequest: state.specialbusrequest
  };
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
  logoutUser: () => dispatch(logoutUser()),
  googleLogin: () => dispatch(googleLogin()),

  postOutpass: (user, outpass) => dispatch(postOutpass(user, outpass)),
  postWallet: (user) => dispatch(postWallet(user)),
  postTicket: (user, ticket) => dispatch(postTicket(user, ticket)),
  postSpecialBusRequest: (user, specialbusrequest) => dispatch(postSpecialBusRequest(user, specialbusrequest)),
  postBus: (user, bus) => dispatch(postBus(user, bus)),

  postStore: (user, store) => dispatch(postStore(user, store)),
  fetchStore: () => dispatch(fetchStore()),

  updateTicket: (user, ticket) => dispatch(updateTicket(user, ticket)),

  postSchedule: (user, schedule) => dispatch(postSchedule(user, schedule)),
  fetchSchedule: () => dispatch(fetchSchedule()),
  updateSchedule: (user, schedule) => dispatch(updateSchedule(user, schedule)),

  deleteBus: (user, bus) => dispatch(deleteBus(user, bus)),
  deleteSpecialBusRequest: (user, specialbusrequest) => dispatch(fetch(deleteSpecialBusRequest(user, specialbusrequest)))
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchSchedule();
    this.props.fetchStore();
  }
  componentWillUnmount() {
    this.props.logoutUser();
  }

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
                    wallet={this.props.wallet}
                  />
                )}
              />
              <Route
                path="/requestSpecialBus"
                component={() => <RequestSpecialBusComponent auth={this.props.auth}
                  postSpecialBusRequest={this.props.postSpecialBusRequest} />}
              />
              <Route
                path="/requestOutpass"
                component={() => <RequestOutpassComponent auth={this.props.auth} postOutpass={this.props.postOutpass} />}
              />
              <Route path="/addBus" component={() => <AddBusComponent auth={this.props.auth} postBus={this.props.postBus} />} />
              <Route
                path="/removeBus"
                component={() => <RemoveBusComponent auth={this.props.auth} bus={this.props.bus} deleteBus={this.props.deleteBus} />}
              />
              <Route
                path="/updateSchedule"
                component={() => <UpdateScheduleComponent auth={this.props.auth} />}
              />
              <Route
                path="/approveOutpass"
                component={() => <ApproveOutpassComponent auth={this.props.auth} outpass={this.props.outpass} />}
              />
              <Route
                path="/selectBus"
                component={() => <SelectBusComponent bus={this.props.bus} />}
              />
              <Route
                path="/viewTrips"
                component={() => <ViewTripsComponent ticket={this.props.ticket} />}
              />
              <Route
                path="/wallet"
                component={() => <WalletComponent wallet={this.props.wallet} store = {this.props.store}/>}
                />
              <Route
                path="/approveBusRequest"
                component={() => <ApproveBusReqComponent auth={this.props.auth} />}
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
