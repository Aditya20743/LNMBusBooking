import React, { Component } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import moment from "moment";
import Divider from "@mui/material/Divider";

class SelectBusSeatComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedSeat : ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit(bus) {
    if (this.props.wallet.wallet.tokenNo < 1) {
      alert("Buy Tokens");
    }
    else if (this.props.auth.user.role === "student" && this.props.outpass === undefined) {
      alert("No approved Outpass");
    }
    else {
      bus.seats[this.state.selectedSeat] = true;
      bus.seatsAvailable = String(bus.seatsAvailable-1);
      var ticket = {
        uid: this.props.auth.user.uid,
        busId: this.props.bus._id,
        busTime: this.props.bus.time,
        source: this.props.bus.source,
        destination: this.props.bus.destination,
        busDate: this.props.bus.date,
        busNumber:this.props.bus.busNumber,

        seatNumber: this.state.selectedSeat,
        status: "Upcoming"
      };
      this.props.bookBus(this.props.auth.user, bus, this.props.wallet.wallet, ticket);
    }
  }

  render() {

    if (!this.props.auth || !this.props.bus) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: You are not authorized.</h6>
          </div>
        </div>
      );
    } else if (this.props.auth.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    }
    else if (this.props.auth.errMess) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: {this.props.bus.errMess}</h6>
          </div>
        </div>
      );
    }
    else{
      const hour = this.props.bus.time.split(":")[0];
      const min = this.props.bus.time.split(":")[1];
      const time = moment.utc().hour(hour).minute(min).second(0);
    const getSeatRow = (i) => {
      let content = [];
      
      for(let j = 0; j<4; j++){
        content.push(
          <li className="seat">
            {this.props.bus.seats[i + j] === true ?
              ((this.props.ticket && this.props.ticket.seatNumber === String(i + j)) ?
                <input type="radio" name="selectedSeat" onChange={this.handleInput} className="booked" id={i + j}></input>
                  :
                  <input type="radio" name="selectedSeat" onChange={this.handleInput} disabled id={i+j}/>)
              :
              <input type="radio" name="selectedSeat" onChange={this.handleInput} value={i + j} id={i + j} />
          }
            <label htmlFor={i+j}>{i+j+1}</label>
          </li>
        );
      }

      return content;
    }
    const getSeatLayout = seatNumber => {
      let content = [];
      for(let i = 0; i<seatNumber; i+=4){
        content.push(<ol className="cabin fuselage">
          <li className="row ml-1">
            <ol className="seats">
              {getSeatRow(i)}
            </ol>
          </li>
        </ol>);
      }

      return content;
    }


    return (
      <div className="container pt-5 c-width">
        <div className="row up-row">
          <div className="col-lg-5 offset-1 offset-lg-0 col-10 mt-3">
            <div className="card mb-4 px-1">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-7">
                    <h3>Bus No. {this.props.bus.busNumber}</h3>
                  </div>
                  <div className="justify-content-end d-flex col-12 col-sm-5">
                    <h5>{this.props.bus.busType}</h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 p-1 ">
                    <div className="row h5 d-flex py-1 justify-content-center">
                      <h5>
                        {this.props.bus.source}
                        <ArrowForwardIcon /> {this.props.bus.destination}
                      </h5>
                    </div>
                  </div>
                </div>
                <Divider />
                <div className="col-sm-8 col-12 my-1">
                  <AccessTimeIcon /> Departure Date: {this.props.bus.date}
                </div>
                <div className="col-sm-8 col-12">
                  <AccessTimeIcon /> Departure Time: {time.format('LT')}
                </div>
                <div className="row m-1 ">
                  <div className="col-sm-8 col-12">Drivers Name : {this.props.bus.driverName}</div>
                </div>
                <div className="row m-1">
                  <div className="col-sm-8 col-12">Contact No : {this.props.bus.driverContactNum}</div>
                </div>
                <div className="row d-flex py-1 justify-content-center ">
                  <div className="col-sm-4 m-1">
                  {
                    (this.props.bus.seatsAvailable !== "0" || this.props.ticket !== undefined)? 
                        <button
                        type="button"
                          className="btn disabled btn-secondary text-white nav-link"
                        >
                        Request Bus <ArrowForwardIcon />
                      </button>
                      :
                      <button
                      type="button"
                          className="btn btn-outline-primary nav-link"
                          onClick={() => this.props.increaseBusRequest(this.props.auth.user, this.props.bus)}
                    >
                      Request Bus <ArrowForwardIcon />
                    </button>
                  }
                  </div>
                  <div className="col-2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card col-10 mb-4 offset-1 offset-sm-1">
                <div className="card-body p-3">
                  <div className="row h5 d-flex justify-content-center">
                    Seats Available: {this.props.bus.seatsAvailable}
                  </div>
                  <div className="row h5 d-flex justify-content-center">
                    Extra Bus Requests: 0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-12 col-md-8 col-lg-5 offset-sm-1 offset-md-2 mb-5">
            <div className="card">
              <div className="card-body">
                <div className="row d-flex align-self-right justify-content-end">
                    <img src="/assests/images/steering.png" width="100px"
                  className="py-2 pl-5" alt="" style={{marginRight:"20%"}}/>
                </div>
                <div className="col-12">
                  <div className="plane">
                  
                    <div className="fuselage">
                      <hr />
                    </div>
                      {getSeatLayout(this.props.bus.totalSeats)}
                    <div className=" fuselage">
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center mb-4">
                
                  {
                    (this.state.selectedSeat === "" || this.props.ticket !== undefined) ? 
                      <>
                        <p className="text-danger">* One person is allowed to book only one seat.</p>
                        <div className="col-sm-4">
                            <button
                            type="button"
                            className="btn disabled btn-secondary text-white nav-link"
                          >  
                            Book Seat <ArrowForwardIcon />
                          </button>
                        </div>
                      </>
                    :
                    <div className="col-sm-4">
                      <button
                        type="button"
                        className="btn btn-outline-primary nav-link"
                        onClick={() => this.handleSubmit(this.props.bus)}>
                        Book Seat <ArrowForwardIcon />
                      </button>
                    </div>
                  }
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default SelectBusSeatComponent;
