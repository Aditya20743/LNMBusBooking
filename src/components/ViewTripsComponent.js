import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";

function RenderTripCard({ trip }) {
  return (
    <div className="card ">
      <div className="row row-fluid d-flex align-self-center justify-content-center">
        <div className="col-12 p-3 ">
          <h5>
          {trip.source} <ArrowForwardIcon /> {trip.destination}
          </h5>
        </div>
      </div>
      <Divider />
      <div className="row ">
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">Date: {"1 Jan 2022"}</div>
        </div>
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">
            <button type="button" className="btn btn-outline-danger ">
              Cancel Booking
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">Time: {"11:15 AM"}</div>
        </div>
      </div>
    </div>
  );
}
class ViewTripsComponent extends Component {
  render() {
    if (this.props.ticket.isLoading) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.ticket.errMess) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Error: {this.props.ticket.errMess}</h6>
          </div>
        </div>
      );
    } else {
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center mb-3">
          <h2>My Bookings</h2>
        </div>

        <Divider textAlign="left">Upcoming Trips </Divider>

        {this.props.ticket.ticket.map((trip) => {
          return (
            <div className="col-12 col-md-10 offset-md-1 my-4">
              <RenderTripCard trip={trip} />
            </div>
          );
        })}

        <Divider textAlign="left">Past Trips </Divider>
        {this.props.ticket.ticket.map((trip) => {
          return (
            <div className="col-12 col-md-10 offset-md-1 my-4">
              <RenderTripCard trip={trip} />
            </div>
          );
        })}
        
      </div>
    );
    }
  }

}

export default ViewTripsComponent;
