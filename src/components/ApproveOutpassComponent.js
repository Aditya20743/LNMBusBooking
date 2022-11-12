import React, { Component } from "react";

class ApproveOutpassComponent extends Component {
  render() {
    return (
      <div className="container c-width pt-5 ">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Outpass Request</h2>
        </div>
        <div className="row-fluid mb-5  mt-4">
          <div>
            <div className="card col-12  ">
              <div className="card-body  p-4">
                <div className="row">
                  <div className="col-6">Name X</div>
                  <div className="col-3">
                    <button type="button" className="btn btn-success">
                      Approve Outpass
                    </button>
                  </div>
                  <div className="col-3">
                    <button type="button" className="btn btn-danger">
                      Disapprove Outpass
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-3">Departure Date:</div>
                  <div className="col-3">DD/MM/YYYY</div>
                  <div className="col-3">Purpose:</div>
                  <div className="col-3">Purpose XYZ</div>
                </div>

                <div className="row mt-3">
                  <div className="col-3">Departure Date:</div>
                  <div className="col-3">DD/MM/YYYY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproveOutpassComponent;

//PENDING RESPONSIVENESS + OTHER FIELDS
