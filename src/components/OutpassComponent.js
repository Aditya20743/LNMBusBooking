import React, { Component } from "react";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

class OutpassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outpass: this.props.outpass.outpass,
    };
  }
  render() {
    if (this.props.outpass.isLoading) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } 
    
    else if (this.props.outpass.errMess) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Error: {this.props.outpass.errMess}</h6>
          </div>
        </div>
      );
    }
    else{
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Outpass</h2>
        </div>
        <div className="row m-4">
          <div className="col-12 col-md-10 col-lg-5 my-3">
            <div className="card ">
              <div className="card-body justify-content-center p-4">
                {this.state.outpass.length !== 0 &&
                this.state.outpass[0].status === "pending" ? (
                  <div className="row ">
                    <div className="col">
                      <h5>Pending :</h5>
                    </div>
                    <div className="row pl-4">
                      <div className="col-12">
                        <h4>{this.state.outpass[0].name}</h4>
                      </div>
                      <div className="col-12">
                        <h6>
                          {this.state.outpass[0].rollNum} &nbsp;|&nbsp;{" "}
                          {this.state.outpass[0].hostelName} &nbsp;{" "}
                          {this.state.outpass[0].roomNumber}
                        </h6>
                      </div>
                      <div className="col-12">
                        Departure Date :- {this.state.outpass[0].departureDate}
                      </div>
                      <div className="col-12">
                        Return Date :- {this.state.outpass[0].returnDate}
                      </div>
                      <div className="col-12">
                        Purpose :- {this.state.outpass[0].purpose}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row mt-3 d-flex justify-content-center ">
                    <div className="align-self-center">
                      <h6>No Pending Request</h6>
                    </div>
                  </div>
                )}

                <div className="col-12 mt-4">
                  <Divider />
                </div>
                <Link to={`/requestOutpass`}>
                  <div className="row d-flex justify-content-center">
                    <div className="align-self-center p-4 ">
                      {this.state.outpass.length === 0 ? (
                        <button
                          type="button"
                          className="btn btn-outline-success"
                        >
                          Request Outpass
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="btn btn-success"
                        >
                          Request Outpass
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-1 d-flex align-self-center justify-content-center">
            <div className="d-none d-lg-block" style={{ height: "40vh" }}>
              <Divider orientation="vertical" />
            </div>
            <div className="d-lg-none d-block mt-5">
              <Divider textAlign="left" style={{ width: "80vw" }}>
                <h5>Approved Outpass</h5>
              </Divider>
            </div>
          </div>
          <div className="col-12 col-md-10 col-lg-6 mt-2 ">
            <div className="card">
              {this.state.outpass.length !== 0 &&
              this.state.outpass[0].status === "Approve" ? (
                <div className="card-body p-4 ">
                  <div className="row">
                    <div className="col-sm-12 col-xl-8">
                      <h3>{this.state.outpass[0].name}</h3>
                    </div>
                    <div className="col-12 col-xl-4">
                      <h5>{this.state.outpass[0].rollNum}</h5>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <h6>
                        {this.state.outpass[0].hostelName} |{" "}
                        {this.state.outpass[0].roomNumber}
                      </h6>
                    </div>
                  </div>
                  <Divider />
                  <div className="row p-4">
                    <div className="col-12">
                      Guardian Name :- {this.state.outpass[0].guardianName}
                    </div>
                    <div className="col-12">
                      Guardian Phone no:-{" "}
                      {this.state.outpass[0].guardianContactNo}
                    </div>
                    <div className="col-12">
                      Departure Date :- {this.state.outpass[0].departureDate}
                    </div>
                    <div className="col-12">
                      Return Date :- {this.state.outpass[0].returnDate}
                    </div>
                    <div className="col-12">
                      Purpose :- {this.state.outpass[0].purpose}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card-body p-5">
                  <div className="row d-flex justify-content-center ">
                    <div className="align-self-center">
                      <h6>No Approved Outpass</h6>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default OutpassComponent;
