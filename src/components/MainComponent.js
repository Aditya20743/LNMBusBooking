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
import SelectBusSeatComponent from "./SelectBusSeatComponent";
import OutpassComponent from "./OutpassComponent";
import QrcodeComponent from "./QrcodeComponent";
import ScheduleComponent from "./ScheduleComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  loginUser, googleLogin, logoutUser, postBus, postOutpass, postStore, postTicket, postWallet, fetchStore, deleteBus, postSpecialBusRequest,
  deleteSpecialBusRequest, postSchedule, fetchSchedule, updateSchedule, updateTicket, updateOutpass, bookBus, updateWallet, updateSpecialBus, checkUser, cancelTicket, deleteSchedule
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
  checkUser: () => dispatch(checkUser()),
  
  postOutpass: (user, outpass) => dispatch(postOutpass(user, outpass)),
  postWallet: (user) => dispatch(postWallet(user)),
  postTicket: (user, ticket) => dispatch(postTicket(user, ticket)),
  postSpecialBusRequest: (user, specialbusrequest) => dispatch(postSpecialBusRequest(user, specialbusrequest)),

  postBus: (user, bus) => dispatch(postBus(user, bus)),
  bookBus: (user, bus, wallet, ticket) => dispatch(bookBus(user, bus, wallet, ticket)),

  postStore: (user, store) => dispatch(postStore(user, store)),
  fetchStore: () => dispatch(fetchStore()),

  updateOutpass: (user, outpass) => dispatch(updateOutpass(user, outpass)),
  updateSpecialBus: (user, specialbus) => dispatch(updateSpecialBus(user, specialbus)),
  updateTicket: (user, ticket) => dispatch(updateTicket(user, ticket)),
  updateWallet: (user, wallet, token) => dispatch(updateWallet(user, wallet, token)),

  postSchedule: (user, schedule) => dispatch(postSchedule(user, schedule)),
  fetchSchedule: () => dispatch(fetchSchedule()),
  updateSchedule: (user, schedule) => dispatch(updateSchedule(user, schedule)),
  deleteSchedule: (user, schedule) => dispatch(deleteSchedule(user, schedule)),
  deleteBus: (user, bus) => dispatch(deleteBus(user, bus)),
  deleteSpecialBusRequest: (user, specialbusrequest) => dispatch(fetch(deleteSpecialBusRequest(user, specialbusrequest))),

  cancelTicket: (user, wallet,ticket) => dispatch(cancelTicket(user, wallet, ticket))
  
});

class Main extends Component {
  componentDidMount() {
    this.props.checkUser();
    this.props.fetchSchedule();
    this.props.fetchStore();
  }
  componentWillUnmount() {
    // this.props.logoutUser();
  }

  render() {
    const BusWithId = ({ match }) => {
      return (
        (this.props.auth.user && (this.props.auth.user.role === "student" || this.props.auth.user.role === "faculty"))
          ?
          <SelectBusSeatComponent bus={this.props.bus.bus.filter((bus) => bus._id === match.params.busId)[0]}
            ticket={this.props.ticket.ticket.filter((ticket) => (ticket.busId === match.params.busId && ticket.status !== "Cancelled"))[0]}
            outpass = {this.props.outpass.outpass.filter((outpass) => outpass.status === "Approve")[0]}
            auth={this.props.auth} wallet={this.props.wallet} bookBus={this.props.bookBus} />
          :
          <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Login Karo pehle</h6>
          </div>
        </div>
      );
    }

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
              <Route exact
                path="/requestSpecialBus"
                component={() => <RequestSpecialBusComponent auth={this.props.auth}
                  postSpecialBusRequest={this.props.postSpecialBusRequest} />}
              />
              <Route
                path="/requestOutpass"
                component={() => <RequestOutpassComponent auth={this.props.auth} outpass = {this.props.outpass} postOutpass={this.props.postOutpass} />}
              />
              <Route exact path="/addBus" component={() => <AddBusComponent auth={this.props.auth} postBus={this.props.postBus} />} />
              <Route exact
                path="/removeBus"
                component={() => <RemoveBusComponent auth={this.props.auth} bus={this.props.bus} deleteBus={this.props.deleteBus} />}
              />
              <Route exact
                path="/updateSchedule"
                component={() => <UpdateScheduleComponent auth={this.props.auth} schedule={this.props.schedule} updateSchedule={this.props.updateSchedule}
                  postSchedule={this.props.postSchedule}
                />}
              />
              <Route exact
                path="/approveOutpass"
                component={() => <ApproveOutpassComponent auth={this.props.auth} outpass={this.props.outpass} updateOutpass = {this.props.updateOutpass}/>}
              />
              <Route exact
                path="/bus"
                component={() => <SelectBusComponent bus={this.props.bus} />}
              />
              <Route exact
                path="/viewTrips"
                component={() => <ViewTripsComponent auth = {this.props.auth} ticket = {this.props.ticket} cancelTicket = {this.props.cancelTicket} wallet = {this.props.wallet}
                />}
              />
              <Route exact
                path="/wallet"
                component={() => <WalletComponent auth = {this.props.auth} wallet={this.props.wallet} store={this.props.store} updateWallet={this.props.updateWallet} />}
              />
              <Route exact
                path="/approveBusRequest"
                component={() => <ApproveBusReqComponent specialbusrequest = {this.props.specialbusrequest} auth={this.props.auth} updateSpecialBus={this.props.updateSpecialBus} />}
              />
              <Route
                path="/bus/:busId" component={BusWithId}
              />
              <Route exact
                path="/outpass"
                component={() => <OutpassComponent  auth = {this.props.auth}  outpass={this.props.outpass} />}
              />
              <Route exact
                path="/qrcode"
                component={() => <QrcodeComponent auth = {this.props.auth} />}
              />
              <Route exact
                path="/schedule"
                component={() => <ScheduleComponent />}
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
