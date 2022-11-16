import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import moment from "moment";

class SelectBusSeatComponent extends Component {
  render() {
    return (
      <div className="container pt-5 c-width">
        <div className="row up-row">
          <div className="col-lg-5 offset-1 offset-xl-0 col-10 mt-3">
            <div className="card mb-4 px-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-7">
                    <h3>Bus No. 1</h3>
                  </div>
                  <div className="justify-content-end d-flex col-12 col-sm-5">
                    <h5>Regular</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-1 ">
                    <div className="row h5 d-flex py-1 justify-content-center">
                      <h5>
                        Source
                        <ArrowForwardIcon /> Destination
                      </h5>
                    </div>
                  </div>
                </div>
                <Divider />
                  <div className="col-sm-8 col-12 my-1">
                    <AccessTimeIcon /> {" "}
                    Departure Date: 15/01/22
                  </div>
                  <div className="col-sm-8 col-12">
                    <AccessTimeIcon /> {" "}
                    Departure Time: 08:00 AM
                  </div>
                <div className="row m-1 ">
                  <div className="col-sm-8 col-12">Drivers Name : Imran</div>
                </div>
                <div className="row m-1">
                  <div className="col-sm-8 col-12">Contact No : 987654321</div>
                </div>
                <div className="row d-flex py-1 justify-content-center ">
                  <div className="col-sm-4 m-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary nav-link"
                    >
                      Select Seats <ArrowForwardIcon />
                    </button>
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card col-10 mb-4 offset-1 offset-sm-1">
                <div className="card-body p-3">
                  <div className="row h4 d-flex justify-content-center">
                    Seats Available: 15
                  </div>
                  <div className="row h4 d-flex justify-content-center">
                    Extra Bus Requests: 0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBusSeatComponent;
