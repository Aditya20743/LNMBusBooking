import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";

class UpdateScheduleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busNumber: "",
      source: "",
      destination: "",
      time: "",
      day: "",
      totalSeats: 0,
      selectDay: "Monday",
      selectedBus: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddBus = this.handleAddBus.bind(this);
    this.handleRemoveBus = this.handleRemoveBus.bind(this);
    this.handleBus = this.handleBus.bind(this);
  }
  handleBus(){
    const schedule = JSON.parse(this.state.selectedBus);
    console.log(schedule);
    this.setState({
      ...this.state,
      busNumber: schedule.busNumber,
      source: schedule.source,
      destination: schedule.destination,
      time: schedule.time,
      day: schedule.day,
      totalSeats: schedule.totalSeats,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.postOutpass(this.props.auth.user, {...this.state, status:"pending"});
    this.setState({
      busNumber: "",
      source: "",
      destination: "",
      busType: "",
      time: "",
      day: "",
      totalSeats: "",
      selectDay: "",
      isBusSelected: "",
    });
    // window.location.href = "/outpass";
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    if(name === "selectedBus" ){
      this.setState({ ...this.state, [name]: value });
      this.handleBus();
    }
    else
    this.setState({ ...this.state, [name]: value });
    console.log(this.state);
  }

  handleAddBus(event) {
    event.preventDefault();
    // this.props.postOutpass(this.props.auth.user, {...this.state, status:"pending"});
    this.setState({
      busNumber: "",
      source: "",
      destination: "",
      busType: "",
      time: "",
      day: "",
      totalSeats: "",
      selectDay: "",
      isBusSelected: "",
    });
    // window.location.href = "/outpass";
  }

  handleRemoveBus(event) {
    event.preventDefault();
    // this.props.postOutpass(this.props.auth.user, {...this.state, status:"pending"});
    this.setState({
      busNumber: "",
      source: "",
      destination: "",
      busType: "",
      time: "",
      day: "",
      totalSeats: "",
      selectDay: "",
      isBusSelected: "",
    });
    // window.location.href = "/outpass";
  }
  render() {
    if (this.props.schedule.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center">
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
    } else {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Update Schedule</h2>
          </div>
          <div className="row-fluid mb-5 align-self-center mt-4">
            <div className="col">
              <div className="card col-12 col-sm-8 col-md-6 col-xl-6 offset-auto offset-sm-3 align-self-center ">
                <div className="card-body align-self-center p-4">
                  <div className="row ">
                    <form onSubmit={this.handleSubmit}>
                      <div className="input-group  mt-4 mb-4 ">
                        <div className="row ">
                          <div className="col p-2">
                            <select
                              className="form-select p-2"
                              id="inputGroupSelect02"
                              onChange={this.handleInput}
                              value={this.state.selectDay}
                              name="selectDay"
                            >
                              <option selected disabled>
                                Select the Day
                              </option>
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                              <option value="Thursday">Thursday</option>
                              <option value="Friday">Friday</option>
                              <option value="Saturday">Saturday</option>
                              <option value="Sunday">Sunday</option>
                            </select>
                          </div>
                          <div className="col p-2">
                            <select
                              className="form-select p-2 "
                              id="inputGroupSelect02"
                              onChange={this.handleInput}
                              name="selectedBus"
                              value = {this.state.selectedBus}
                            >
                              <option selected >
                                Select the Bus
                              </option>

                              {this.props.schedule.schedule.filter(
                                (schedule) =>
                                  schedule.day === this.state.selectDay
                              ).length === 0 ? (
                                <div className="d-flex align-self-center justify-content-center my-4">
                                  <h5>No Buses Available </h5>
                                </div>
                              ) : (
                                this.props.schedule.schedule
                                  .filter(
                                    (schedule) =>
                                      schedule.day ===
                                      this.state.selectDay
                                  )
                                  .map((schedule) => {
                                    return (
                                      <option
                                        value={JSON.stringify(schedule)}
                                        key={schedule._id}
                                      >
                                        Bus No. {schedule.busNumber},{" "}
                                        {schedule.source} to{" "}
                                        {schedule.destination}, {schedule.time},{" "}
                                        {schedule.busType}
                                      </option>
                                    );
                                  })
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="row p-1">
                    <div className="col p-2 ">
                      <button type="button" className="btn btn-success">
                        Add Bus
                      </button>
                    </div>
                    <div className="col p-2">
                      <button type="button" className="btn btn-danger">
                        Remove Bus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 align-self-center mt-4">
            <div className="col d-flex  justify-content-center">
              <div className="card col-12 col-md-10   mb-4">
                <div className="card-body  p-4 ">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <div className="form-group  ">
                        <input
                          type="number"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Bus No."
                          name="busNumber"
                          onChange={this.handleInput}
                          value={this.state.busNumber}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-5 p-3">
                      <div className=" form-group  ">
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Source"
                          name="source"
                          onChange={this.handleInput}
                          value={this.state.source}
                        />
                      </div>
                    </div>
                    <div className="col-2 p-3 mt-1 "></div>
                    <div className="col-5 p-3 justify-content-start">
                      <div className="form-group  ">
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Destination"
                          name="destination"
                          onChange={this.handleInput}
                          value={this.state.destination}
                        />
                      </div>
                    </div>
                    <Divider />
                  </div>
                  <div className="row ">
                    <div className="col-sm col-md-3">
                      <div className="  m-1 ">
                        <AccessTimeIcon /> Departure Time:{" "}
                      </div>
                    </div>
                    <div className="col-6 col-md-5 mt-2">
                      <TextField
                        id="time"
                        label="Select Time"
                        type="time"
                        defaultValue="06:00"
                        onChange={this.handleInput}
                        value={this.state.time}
                        name="time"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        inputProps={{
                          step: 300, // 5 mins
                        }}
                        sx={{ width: 150 }}
                      />
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-sm col-md-3">
                      <div className=" ">
                        <AccessTimeIcon /> Select Day:{" "}
                      </div>
                    </div>
                    <div className="col-sm col-sm-4">
                      <div className="input-group mt-2 ">
                        <select
                          className="form-select p-2"
                          id="inputGroupSelect02"
                          onChange={this.handleInput}
                          value={this.state.day}
                          name="day"
                        >
                          <option selected value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Wednesday">Wednesday</option>
                          <option value="Thursday">Thursday</option>
                          <option value="Friday">Friday</option>
                          <option value="Saturday">Saturday</option>
                          <option value="Sunday">Sunday</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm col-sm-2 mt-3">totalSeats:-</div>
                    <div className="col-12 col-sm-4 col-md-2 mt-2">
                      <div className="form-group  ">
                        <input
                          type="number"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Total totalSeats in Bus"
                          name="totalSeats"
                          onChange={this.handleInput}
                          value={this.state.totalSeats}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 align-self-center mt-4">
            <div className="col d-flex  justify-content-center">
              <div className="row m-3 pt-2 pt-2 pd-2">
                <button
                  type="submit"
                  className="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
                >
                  Update Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UpdateScheduleComponent;
