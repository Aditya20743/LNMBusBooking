import React, { Component } from "react";

class ApproveBusReqComponent extends Component {
  render() {
    return (
      <div className="container c-width pt-5 ">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Bus Requests</h2>
        </div>
        <div className="row-fluid mb-5  mt-4">
          <div>
            <div className="card col-fluid">
              <div className="card-body  p-3">
                <div className="row mt-1">
                  <div className="col-4 col-md-3">Email ID:</div>
                  <div className="col-8 col-md-3">20ucs001@lnmiit.ac.in</div>
                  <div className="col-6 col-md-3 mt-2 mt-md-0">
                    <button type="button" className="btn btn-success">
                      Approve Bus
                    </button>
                  </div>
                  <div className="col-6 col-md-3 mt-2 mt-md-0">
                    <button type="button" className="btn btn-danger">
                      Disapprove Bus
                    </button>
                  </div>
                </div>
                <div className="row mt-3 ">
                  <div className="col-6 col-md-3 ">Source:</div>
                  <div className="col-6 col-md-3">LNMIIT</div>
                  <div className="col-6 col-md-2">Destination:</div>
                  <div className="col-6 col-md-4">BITS Pilani</div>
                </div>

                <div className="row mt-1">
                  <div className="col-6 col-md-3">Departure Date:</div>
                  <div className="col-6 col-md-3">DD/MM/YYYY</div>
                  <div className="col-6 col-md-2">Purpose:</div>
                  <div className="col-6 col-md-4">Purpose XYZ</div>
                </div>

                <div className="row mt-1">
                  <div className="col-6 col-md-3">Departure Time:</div>
                  <div className="col-6 col-md-3">HH:MM AM</div>
                  <div className="col-6 col-md-2">Bus Type:</div>
                  <div className="col-6 col-md-4">Normal</div>
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

// <div className="row">
//   <div className="col-6">
//     <div className="row">
//       <div className="col-3">Request ID:</div>
//       <div className="col-3">XYZ</div>
//     </div>
//     <div className="row">Destination:</div>
//   </div>
//   <div className="col-3">
//     <button type="button" className="btn btn-success">
//       Approve Bus
//     </button>
//   </div>
//   <div className="col-3">
//     <button type="button" className="btn btn-danger">
//       Disapprove Bus
//     </button>
//   </div>
// </div>;
