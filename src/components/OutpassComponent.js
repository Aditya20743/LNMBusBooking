import React, { Component } from "react";
// import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

class OutpassComponent extends Component {
  render() {
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Outpass</h2>
        </div>
        <div className="row">
          <div className="col-6 mt-2">
            <div className="card col-8">
              <div className="card-body align-self-center p-4">
                <div className="row">No Pending Requests</div>
                <div className="row">
                  <hr />
                </div>
                <div className="row">
                  <div className="col align-self-center p-4 ">
                    <button type="button" className="btn btn-success">
                      Outpass
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 mt-2 ">
            <div className="card">
              <div className="card-body  p-4 ">
                <div className="row">
                  <div className="col-sm-9 ">
                    <h2>Krishan Kumar</h2>
                  </div>
                  <div className="col-12 col-sm-3 ">
                    <h5>20UCS001</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-3 ">
                    <h5>
                      Source <ArrowForwardIcon /> Destination
                    </h5>
                  </div>
                </div>
                <Divider />
                <div className="row">Guardian Name :- Yash Jain</div>
                <div className="row">Guardian Phone no:- 9845345643</div>
                <div className="row">Departure Date :- DD-MM-YY</div>
                <div className="row">Return Date :- DD-MM-YY</div>
                <div className="row">Purpose of Visit :- DD-MM-YY</div>
                <div className="row mt-2">
                  <div className="col-sm-9 col-12 my-3">
                    <AccessTimeIcon />
                    Departure Time: 02:35
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OutpassComponent;
