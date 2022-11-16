import React, { Component } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { Link } from "react-router-dom";
import Login from "./LoginComponent";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleLogout() {
    this.props.logoutUser();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    if (
      this.props.auth.isAuthenticated &&
      this.props.auth.user.role === "admin"
    ) {
      return (
        //ADMIN HOME PAGE
        <div className="container pt-5 c-width">
          <div className="up-row row-fluid pt-5 mb-5 align-self-center ">
            <h1>Welcome Admin,</h1>
          </div>
          <div className="row ">
            <div className="card col-10 col-sm-6 col-md-6 col-xl-4 offset-1 offset-sm-0 align-self-center ">
              <div className="card-body align-self-center p-3">
                <Link to={`/approveBusRequest`}>
                  <div className="row mt-3">
                    <button
                      type="button "
                      className="cardBtn btn-primary btn d-flex py-2 px-3 mb-3 btn-block justify-content-center nav-link"
                    >
                      View Bus Requests
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
                <Link to={`/addBus`}>
                  <div className="row ">
                    <button
                      type="button"
                      class="cardBtn btn-primary btn d-flex py-2 px-3 mb-3 btn-block justify-content-center nav-link"
                    >
                      Add Bus
                      <div className="home-btn-icon ml-2 ">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
                <Link to={`/removeBus`}>
                  <div className="row mb-3">
                    <button
                      type="button"
                      className="cardBtn btn-primary btn d-flex py-2 px-3 btn-block justify-content-center nav-link"
                    >
                      Remove Bus
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
                <Link to={`/updateSchedule`}>
                  <div className="row mb-3">
                    <button
                      type="button"
                      className="cardBtn btn-primary btn d-flex py-2 px-3 mb-3 btn-block justify-content-center nav-link"
                    >
                      Update Schedule
                      <div className="home-btn-icon ml-2 ">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" col-9 col-sm-6 mb-5 mt-2 offset-xl-2 offset-1 offset-sm-0">
              <img
                src="assests/images/admin-home-bg.png"
                alt="LNMBus"
                width="100%"
              />
            </div>
          </div>
        </div>
      );
    } else if (
      this.props.auth.isAuthenticated &&
      this.props.auth.user.role === "caretaker"
    ) {
      return (
        // CARETAKER HOME PAGE
        <div className="container pt-5 c-width">
          <div className="up-row row pt-5 align-self-center ">
            <h3>Welcome Caretaker,</h3>
          </div>
          <div className="row ">
            <div className="card col-10 col-sm-6 col-md-6 col-xl-4 offset-1 offset-sm-0 align-self-center">
              <div className="card-body align-self-center p-3">
                <div className="row mt-3">
                  <Link to={`/approveOutpass`}>
                    <button
                      type="button "
                      className="cardBtn btn-primary btn> d-flex p-3 mb-3 btn-block justify-content-center nav-link"
                    >
                      Display Outpass Requests
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" col-10 col-sm-6  mb-5 mt-2 offset-xl-2 offset-1 offset-sm-0">
              <img
                src="assests/images/Caretaker-homepage.png"
                alt="LNMBus"
                width="100%"
              />
            </div>
          </div>
        </div>
      );
    } else {
      //HOME PAGE FOR STUDENT, Others
      return (
        <div className="container-fluid home-bg pt-5 c-width">
          <div className="row pb-4 pt-5 mt-5">
            <div className="card col-8 mt-5 col-sm-6 col-md-4 col-lg-3 offset-2 offset-sm-3 offset-md-6 offset-lg-7">
              <div className="card-body align-self-center p-3">
                {this.props.auth.isAuthenticated ? (
                  <>
                    <div className="row">
                      <div className="d-flex col-flex justify-content-center token-count-circle offset-2">
                        <div className="align-self-center">
                          <h1>{this.props.wallet.isLoading ? "Loading" : ( this.props.wallet.wallet ) ? this.props.wallet.wallet.tokenNo : "Loading"}</h1> Tokens
                        </div>
                      </div>
                    </div>
                    <Link to={`/wallet`}>
                    <div className="row mt-3">
                      <button
                        type="button"
                        className="cardBtn btn-primary btn d-flex p-2 mb-3 btn-block justify-content-center nav-link"
                      >
                        Purchase Tokens
                        <div className="home-btn-icon ml-2">
                          <ArrowCircleRightOutlinedIcon />
                        </div>
                      </button>
                      </div>
                    </Link>
                  </>
                ) : (
                  <div className="row mt-3">
                    <button
                      type="button"
                      className="cardBtn btn-primary btn d-flex p-2 mb-3 btn-block justify-content-center nav-link"
                      onClick={this.toggleModal}
                    >
                      Login
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                )}

                <hr color="black" />

                <div className="row-flex">
                  <div className="col py-4 align-self-center">
                    No Upcoming Trips
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pb-4">
            <div className="card col-8 col-sm-6 col-md-4 col-lg-3 offset-2 offset-sm-3 offset-md-6 offset-lg-7">
              <div className="card-body align-self-center p-3">
                <Link to={`/bus`}>
                  <div className="row mt-3">
                    <button
                      type="button "
                      className="cardBtn btn-primary btn> d-flex p-2 mb-3 btn-block justify-content-center nav-link"
                    >
                      Book Ticket
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
                <Link to={`/`}>
                  <div className="row ">
                    <button
                      type="button"
                      className="cardBtn btn-primary btn> d-flex py-2 px-4 mb-3 btn-block justify-content-center nav-link"
                    >
                      View Schedule
                      <div className="home-btn-icon ml-2 ">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
                <Link to={`/outpass`}>
                  <div className="row mb-3">
                    <button
                      type="button"
                      className="cardBtn btn-primary btn> d-flex py-2 px-4 btn-block justify-content-center nav-link"
                    >
                      Outpass
                      <div className="home-btn-icon ml-2">
                        <ArrowCircleRightOutlinedIcon />
                      </div>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {this.state.isModalOpen ? (
            <Login
              loginUser={this.props.loginUser}
              googleLogin={this.props.googleLogin}
            />
          ) : null}
        </div>
      );
    }
  }
}

export default Home;

