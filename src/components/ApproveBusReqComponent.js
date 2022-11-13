import React, { Component } from "react";

class ApproveBusReqComponent extends Component {
  render() {
    return (
      <div className="container c-width pt-5 ">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Bus Requests</h2>
        </div>
        <div className="row-fluid mb-5  mt-4">
          <div className="card col-fluid">
            <div className="card-body  p-3">
              <div className="row mt-1">
                <div className="col-12 col-md-6">
                  <h5 className="p-2 px-4">20ucs001@lnmiit.ac.in</h5>
                </div>
                <div className="col-6 col-md-3 mt-2 mt-md-0">
                  <button
                    type="button"
                    className="btn btn-block btn-outline-success"
                  >
                    Approve Bus
                  </button>
                </div>
                <div className="col-6 col-md-3 mt-2 mt-md-0">
                  <button
                    type="button"
                    className="btn btn-block btn-outline-danger"
                  >
                    Disapprove Bus
                  </button>
                </div>
              </div>
              <div className="row mt-3 ">
                <div className="col-6 col-md-3 ">Source:</div>
                <div className="col-6 col-md-3">LNMIIT</div>
                <div className="col-6 col-md-3">Destination:</div>
                <div className="col-6 col-md-3">BITS Pilani</div>
              </div>

              <div className="row mt-1">
                <div className="col-6 col-md-3">Departure Date:</div>
                <div className="col-6 col-md-3">DD/MM/YYYY</div>
                <div className="col-6 col-md-3">Bus Type:</div>
                <div className="col-6 col-md-3">Normal</div>
              </div>

              <div className="row mt-1">
                <div className="col-6 col-md-3">Departure Time:</div>
                <div className="col-6 col-md-3">HH:MM AM</div>
                <div className="col-6 col-md-3">Purpose:</div>
                <div className="col-6 col-md-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolores, maxime!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproveBusReqComponent;
