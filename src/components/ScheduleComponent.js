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
    return (
      <div className="container c-width pt-5">
        <div className="row up-row">
          <div className="col-12 col-md-3 mt-4 ">
            <div className="">
              <img
                src="assests/images/Schedule4.jpg"
                alt="LNMBus"
                width="110%"
              />
            </div>
          </div>
          <div className="col-12 col-md-9 mt-4">
            <div className="row-12 ">
              <div className="col-6 col-md-12">
                <nav className="navbar-sch   navbar-dark">
                  <div className="btn-group">
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Monday")}>
                    Monday
                    </button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Tuesday")}>
                    Tuesday</button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Wednesday")}>
                    Wednesday</button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Thursday")}>
                    Thursday</button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Friday")}>
                    Friday</button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Saturday")}>
                    Saturday</button>
                    <button className="btn-grp-sch"
                    onClick={() => this.handleDay("Sunday")}>
                    Sunday</button>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row-12 ">
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
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>Ajmeri Gate</td>
                        <td>LNMIIT</td>
                        <td>07:35 AM</td>
                      </tr>
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

export default ScheduleComponent;
