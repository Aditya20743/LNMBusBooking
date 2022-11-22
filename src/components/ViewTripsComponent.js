import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import moment from "moment";


function RenderTripCard({ trip, handleSubmit}) {
  return (
    <div className="card ">
      <div className="row ">
        <div className="d-flex h5 justify-content-center pt-3 col-md-4 col-12 p-md-3 ">
          Bus No. {trip.busNumber}
        </div>
        <div className=" d-flex justify-content-center col-md-4 col-12 p-md-3">
          <h5>
            {trip.source} <ArrowForwardIcon /> {trip.destination}
          </h5>
        </div>
        <div className="d-flex h5 justify-content-center pb-2 col-md-4 col-12 p-md-3">
           Seat - {Number(trip.seatNumber)+1}
        </div>
      </div>
      <Divider />
      <div className="row ">
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">Date: {trip.busDate}</div>
        </div>
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">
            {trip.status === "Upcoming" ? (
              <button type="button" className="btn btn-outline-danger " onClick={() => handleSubmit(trip)}>
                Cancel Booking
              </button>
            ) : (
              <button type="button" className="btn btn-outline-success " >
                Completed
              </button>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-4 col-12 p-md-3 p-1">
          <div className="align-self-center">
            Time: {moment(trip.busTime, "hh:mm").format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
}
class ViewTripsComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(ticket) {
    ticket = {...ticket, status : "Cancelled"} ;
    this.props.cancelTicket(this.props.auth.user, this.props.wallet.wallet, ticket);
  }
  
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
          <div className="row-fluid mb-5 mt-4">
            

          <Divider textAlign="left">Upcoming Trips </Divider>

          {this.props.ticket.ticket.filter((trip) => trip.status === "Upcoming").length === 0 ? 
              <div className="d-flex align-self-center justify-content-center my-4">
                <h5>No Trips :( </h5>
              </div>
            : this.props.ticket.ticket.filter((trip) => trip.status === "Upcoming")
            .map((trip) => {
              return (
                <div className="col-12 col-md-10 offset-md-1 my-3">
                  <RenderTripCard trip={trip} handleSubmit = {this.handleSubmit}/>
                </div>
              );
            })}

          <Divider textAlign="left">Past Trips </Divider>
          {this.props.ticket.ticket.filter((trip) => trip.status === "Past").length === 0  ? 
              <div className="d-flex align-self-center justify-content-center my-4">
                <h5>No Trips :( </h5>
              </div>
            : this.props.ticket.ticket.filter((trip) => trip.status === "Past")
            .map((trip) => {
              return (
                <div key={trip._id} className="col-12 col-md-10 offset-md-1 my-3">
                  <RenderTripCard trip={trip} />
                </div>
              );
            })}
        </div>
        </div>
      );
    }
  }
}

export default ViewTripsComponent;
