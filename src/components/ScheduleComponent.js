import React, { Component } from "react";

class ScheduleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day : "Monday"
    };

    this.handleDay = this.handleDay.bind(this);
  }

  handleDay(inputDay) {
    this.setState({ ...this.state, day: inputDay });
  }
  render() {
    if (this.props.schedule.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.schedule.errMess) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: {this.props.schedule.errMess}</h6>
          </div>
        </div>
      );
    }
    else{
    return (
      <div className="container c-width pt-5">
        <div className="row up-row">
          <div className="col-3 d-none d-lg-block mt-4">
              <img
                src="assests/images/schedule.jpg"
                alt="LNMBus"
                width="110%"
              />
          </div>
          <div className="col-12 col-lg-9 mt-4">
            <div className="col-12 ml-3">
                <nav className="navbar-sch navbar-dark">
                  <div className="btn-group">
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4 pl-4"
                    onClick={() => this.handleDay("Monday")}>
                    <div className="d-none d-md-block">Monday</div>
                    <div className="d-md-none d-block">Mon</div>
                    
                    </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4"
                    onClick={() => this.handleDay("Tuesday")}>
                    <div className="d-none d-md-block">Tuesday</div>
                    <div className="d-md-none d-block">Tue</div>
                  </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4"
                    onClick={() => this.handleDay("Wednesday")}>
                    <div className="d-none d-md-block">Wednesday</div>
                    <div className="d-md-none d-block">Wed</div>
                  </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4"
                    onClick={() => this.handleDay("Thursday")}>
                    <div className="d-none d-md-block">Thursday</div>
                    <div className="d-md-none d-block">Thur</div>
                  </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4"
                    onClick={() => this.handleDay("Friday")}>
                    <div className="d-none d-md-block">Friday</div>
                    <div className="d-md-none d-block">Fri</div>
                  </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4"
                    onClick={() => this.handleDay("Saturday")}>
                    <div className="d-none d-md-block">Saturday</div>
                    <div className="d-md-none d-block">Sat</div>
                  </button>
                    <button className="btn-grp-sch px-2 px-sm-3 px-xl-4 pr-4"
                    onClick={() => this.handleDay("Sunday")}>
                    <div className="d-none d-md-block">Sunday</div>
                    <div className="d-md-none d-block">Sun</div>
                  </button>
                  </div>
                </nav>
            </div>
            <div className="col-12">
              <div className="card-12">
                <div className="card-body p-4 ">
                  <table className="table table-hover table">
                    <thead>
                      <tr>
                        <th scope="col">Bus No.</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.schedule.schedule ?
                        this.props.schedule.schedule.filter((trip) => (trip.day === this.state.day)).map((trip) => {
                          return(
                            <tr>
                              <th scope="row">{trip.busNumber}</th>
                              <td>{trip.source}</td>
                              <td>{trip.destination}</td>
                              <td>{trip.time}</td>
                            </tr>
                          );
                        })
                        :
                        "Loading"
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default ScheduleComponent;
