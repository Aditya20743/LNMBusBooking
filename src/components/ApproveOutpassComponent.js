import React, { Component } from "react";

function RenderOutpassRequest({ outpass, onclick }) {
  return (
    <div className="card ">
      <div className="card-body p-4">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h4>Name: {outpass.name}</h4>
          </div>
          <div className="col-lg-3 col-6">
            <button
              type="button"
              className="btn btn-block btn-outline-success "
            >
              Approve
            </button>
          </div>
          <div className="col-lg-3 col-6">
            <button type="button" className="btn btn-block btn-outline-danger">
              Disapprove
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 col-6">Roll No.: </div>
          <div className="col-lg-3 col-6">{outpass.rollNum}</div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-3 col-6">Hostel: </div>
          <div className="col-lg-3 col-6">{outpass.hostelName}</div>
          <div className="col-lg-3 col-6">Room No.: </div>
          <div className="col-lg-3 col-6">{outpass.roomNumber}</div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-3 col-6">Departure Date:</div>
          <div className="col-lg-3 col-6">{outpass.departureDate}</div>
          <div className="col-lg-3 col-6">Arrival Date:</div>
          <div className="col-lg-3 col-6">{outpass.returnDate}</div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-3 col-6">Guardian Name:</div>
          <div className="col-lg-3 col-6">{outpass.guardianName}</div>
          <div className="col-lg-3 col-6">Guardian No.:</div>
          <div className="col-lg-3 col-6">{outpass.guardianContactNo}</div>
        </div>
        <div className="row mt-1">
          <div className="col-lg-3 col-6">Purpose:</div>
          <div className="col-lg-9 col-6">{outpass.purpose}</div>
        </div>
      </div>
    </div>
  );
}
class ApproveOutpassComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.outpass.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.outpass.errMess) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: {this.props.outpass.errMess}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container c-width pt-5">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Outpass Request</h2>
          </div>
          <div className="row-fluid mb-5 mt-4">
            {this.props.outpass.outpass.map((outpass) => {
              return (
                <div key={outpass._id} className="col-12 mb-4">
                  <RenderOutpassRequest outpass={outpass} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default ApproveOutpassComponent;
