import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import moment from "moment";

class SelectBusSeatComponent extends Component {
  render() {
    return (
      <div className="container pt-5 c-width">
        <div className="row up-row ">
          <div className="col-6 mt-3">
            <div className="card col-12   mb-4">
              <div className="card-body  p-4 ">
                <div className="row">
                  <div className="col-sm-9 ">
                    <h2>Bus No. 1</h2>
                  </div>
                  <div className="col-12 col-sm-3 ">
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
                <div className="row m-1 pt-2">
                  <div className="col-sm-8 col-12 my-1 ">
                    <AccessTimeIcon />
                    Departure Date: 15/01/22
                  </div>
                </div>
                <div className="row m-1 ">
                  <div className="col-sm-8 col-12">
                    <AccessTimeIcon />
                    Departure Time: 08:00 AM
                  </div>
                </div>
                <div className="row m-1 ">
                  <div className="col-sm-8 col-12">Drivers Name : Imran</div>
                </div>
                <div className="row m-1">
                  <div className="col-sm-8 col-12">Contact No : 987654321</div>
                </div>
                <div className="row d-flex py-1 justify-content-center">
                  <div className="col-sm-4 col-6 offset-3 offset-sm-0">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm d-flex m-1 btn-block justify-content-center nav-link"
                    >
                      Request Bus
                      <div className="">
                        <ArrowForwardIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card col-12   mb-4">
                <div className="card-body  p-4 ">
                  <div className="row h3 d-flex py-1 justify-content-center">
                    Seats Available: 15
                  </div>
                  <div className="row h3 d-flex py-1 justify-content-center">
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
