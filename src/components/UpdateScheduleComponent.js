import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import moment from "moment";

class UpdateScheduleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      busNumber: "",
      source: "",
      destination: "",
      time: "",
      day: "Monday",
      totalSeats: 0,
      selectDay: "Monday",
      selectedBus: "",
      driverName: "Mohanlal",
      driverContactNum: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleAddBus = this.handleAddBus.bind(this);
    this.handleRemoveBus = this.handleRemoveBus.bind(this);
    this.handleBus = this.handleBus.bind(this);
  }
  handleBus(schedule){
    const sch = JSON.parse(schedule);
    
    this.setState({
      ...this.state,
      _id: sch._id,
      busNumber: sch.busNumber,
      source: sch.source,
      destination: sch.destination,
      time: sch.time,
      day: sch.day,
      totalSeats: sch.totalSeats,
      driverName: sch.driveName,
      driverContactNum: sch.driverContactNum
    });
  }
  resetForm(){
    this.setState({
      _id: "",
      busNumber: "",
      source: "",
      destination: "",
      time: "",
      day: "Monday",
      totalSeats: 0,
      selectDay: "Monday",
      selectedBus: "",
      driverName: "Mohanlal",
      driverContactNum: ""
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const schedule = {
      _id: this.state._id,
      busNumber: this.state.busNumber,
      source: this.state.source,
      destination: this.state.destination,
      time: this.state.time,
      day: this.state.day,
      totalSeats: this.state.totalSeats,
      driverName: this.state.driverName,
      driverContactNum: this.state.driverContactNum
    }
  
    this.props.updateSchedule(this.props.auth.user, schedule);
    this.resetForm();
  }
  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    if(name === "selectedBus"){
      this.setState({ ...this.state, [name]: value});
      this.handleBus(value);
    }
    else
      this.setState({ ...this.state, [name]: value });
  }

  handleAddBus(event) {
    event.preventDefault();
    const schedule = {
      busNumber: this.state.busNumber,
      source: this.state.source,
      destination: this.state.destination,
      time: this.state.time,
      day: this.state.day,
      totalSeats: this.state.totalSeats,
      driverName: this.state.driverName, 
      driverContactNum: this.state.driverContactNum
    }
    this.props.postSchedule(this.props.auth.user, schedule);
    this.resetForm();
  }

  handleRemoveBus(event) {
    event.preventDefault();
    const schedule = {
      _id: this.state._id,
      busNumber: this.state.busNumber
    };

    this.props.deleteSchedule(this.props.auth.user, schedule);
    
    this.resetForm();
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
              <div className="card col-12 col-sm-10 col-xl-6 offset-auto offset-sm-1 offset-xl-3 align-self-center ">
                <div className="card-body align-self-center p-4">
                  <div className="row ">
                    <form>
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
                              <option disabled>
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
                            >
                              <option value = "">
                                Select the Bus
                              </option>

                              {!this.props.schedule.schedule ? "Loading" :this.props.schedule.schedule.filter(
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
                                        {schedule.destination},
                                        {moment(schedule.time, "hh:mm").format("LT")}
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
                      {this.state._id? 
                        <button type="button" className="btn btn-success disabled" onClick={this.handleAddBus}>
                          Add Bus
                        </button> 
                        :
                      <button type="button" className="btn btn-success " onClick={this.handleAddBus}>
                        Add Bus
                      </button>}
                      
                    </div>
                    <div className="col p-2">
                      {this.state._id
                        ?<button type="button" className="btn btn-danger" onClick={this.handleRemoveBus}>
                            Remove Bus
                          </button>
                        : <button type="button" className="btn btn-danger disabled">
                            Remove Bus
                          </button>
                      }
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-2 align-self-center mt-4">
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
                    <div className="col-sm col-sm-2 mt-3">Total Seats:</div>
                    <div className="col-12 col-sm-4 col-md-2 mt-2">
                      <div className="form-group">
                        <input
                          type="number"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Total seats in Bus"
                          name="totalSeats"
                          onChange={this.handleInput}
                          value={this.state.totalSeats}
                        />
                      </div>
                    </div>
                  </div>
                    <div className="row pt-2">
                    <div className="col-sm col-md-3">
                      <div className=" ">
                        Driver Name:
                      </div>
                    </div>
                    <div className="col-sm col-sm-4">
                      <div className="input-group mt-2 ">
                        <select
                          className="form-select p-2"
                          id="inputGroupSelect02"
                          onChange={this.handleInput}
                          value={this.state.driverName}
                          name="driverName"
                          placeholder="Driver's Name"
                        >
                          <option selected value="Mohanlal">Mohanlal</option>
                          <option value="Madanlal">Madanlal</option>
                          <option value="Jethalal">Jethalal</option>
                          <option value="Ghasitalal">Ghasitalal</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm col-sm-2 mt-2">Driver's Contact:</div>
                    <div className="col-12 col-sm-4 col-md-3 mt-2">
                      <div className="form-group  ">
                        <input
                          type="number"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Contact No."
                          name="driverContactNum"
                          onChange={this.handleInput}
                          value={this.state.driverContactNum}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-4 align-self-center">
            <div className="col d-flex  justify-content-center">
              <div className="row mx-3 pt-2 pd-2">
                {
                  this.state._id
                  ?
                  <button
                  type="submit"
                  className="cardBtn btn-primary btn d-flex mb-3 btn-block justify-content-center nav-link"
                  onClick={this.handleSubmit}
                >
                  Update Schedule
                </button>
                :
                <button
                  type="submit"
                  className="cardBtn btn-primary btn d-flex disabled mb-3 btn-block justify-content-center text-white"
                >
                  Update Schedule
                </button>
                }
                
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default UpdateScheduleComponent;
