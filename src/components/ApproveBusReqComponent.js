import React, { Component } from "react";
import moment from "moment";

function RenderApproveBusRequest({ busRequest }) {
  return (
    <div className="card col-fluid">
      <div className="card-body  p-3">
        <div className="row mt-1">
          <div className="col-12 col-md-6">
            <h5 className="p-2 px-4">{busRequest.email}</h5>
          </div>
          <div className="col-6 col-md-3 mt-2 mt-md-0">
            <button type="button" className="btn btn-block btn-outline-success">
              Approve
            </button>
          </div>
          <div className="col-6 col-md-3 mt-2 mt-md-0">
            <button type="button" className="btn btn-block btn-outline-danger">
              Disapprove
            </button>
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-6 col-md-3 ">Source:</div>
          <div className="col-6 col-md-3">{busRequest.source}</div>
          <div className="col-6 col-md-3">Destination:</div>
          <div className="col-6 col-md-3">{busRequest.destination}</div>
        </div>

        <div className="row mt-1">
          <div className="col-6 col-md-3">Departure Date:</div>
          <div className="col-6 col-md-3">{busRequest.date}</div>
          <div className="col-6 col-md-3">Bus Type:</div>
          <div className="col-6 col-md-3">{busRequest.busType}</div>
        </div>

        <div className="row mt-1">
          <div className="col-6 col-md-3">Departure Time:</div>
          <div className="col-6 col-md-3">{moment(busRequest.time,"hh:mm").format("LT")}</div>
          <div className="col-6 col-md-3">Purpose:</div>
          <div className="col-6 col-md-3">{busRequest.purpose}</div>
        </div>
      </div>
    </div>
  );
}

class ApproveBusReqComponent extends Component {

  render() {
    if (this.props.specialbusrequest.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.specialbusrequest.errMess) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: {this.props.specialbusrequest.errMess}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container c-width pt-5 ">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Bus Requests</h2>
          </div>
          <div className="row-fluid mb-5  mt-4">
            {this.props.specialbusrequest.specialBusRequest.map((busRequest) => {
              return (
                <div key={busRequest._id} className="col-12 mb-4">
                  <RenderApproveBusRequest busRequest={busRequest} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default ApproveBusReqComponent;
