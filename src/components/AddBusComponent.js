import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class AddBusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      destination: "",
      date: "",
      time: "",
      busType: "",
      totalSeats: "",
      busNumber: "",
      driverName: "",
      driverContactNum: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postBus(this.props.auth.user,this.state);
    this.setState({source: "",destination: "",date: "",time: "",busType: "",totalSeats: "",busNumber: "", driverName: "", driverContactNum: ""});
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value });
  }
  render() {
    return (
      <div>
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Provide Bus Details</h2>
          </div>
          <div className="row-fluid mb-5 align-self-center mt-4">
            <div className="card col-12 col-sm-10 col-md-8 col-xl-6 offset-xl-3 offset-md-2 offset-sm-1 align-self-center ">
              <div className="card-body align-self-center p-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group pt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Source"
                      name="source"
                      onChange={this.handleInput}
                      value={this.state.source}
                    />
                  </div>
                  <div className="form-group  ">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Destination"
                      name="destination"
                      onChange={this.handleInput}
                      value={this.state.destination}
                    />
                  </div>

                  <div className="form-group pt-3">
                    <div className="row-flex d-flex">
                      <div className="pt-3 form-group">
                        <Stack
                          component="form"
                          className=""
                          noValidate
                          spacing={3}
                        >
                          <TextField
                            id="date"
                            label="Select Date"
                            type="date"
                            model=".date"
                            className=""
                            defaultValue="2022-01-01"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            name="date"
                            onChange={this.handleInput}
                            value={this.state.date}
                          />
                          <TextField
                            id="time"
                            label="Select Time"
                            type="time"
                            model=".time"
                            className=""
                            defaultValue="06:00"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              step: 300, // 5 mins
                            }}
                            name="time"
                            onChange={this.handleInput}
                            value={this.state.time}
                            sx={{ width: 220 }}
                          />
                        </Stack>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div className="input-group col-6 col-xl-4 mb-4">
                          <select
                            className="form-select"
                            id="inputGroupSelect02"
                            name="busType"
                            onChange={this.handleInput}
                            value={this.state.busType}
                          >
                            <option selected disabled>
                              Select Type
                            </option>
                            <option value="Regular">Regular</option>
                            <option value="Special">Special</option>
                          </select>
                        </div>

                        <div className="form-group col-6 col-xl-8 mb-4 ">
                          <input
                            type="number"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Total Seats"
                            name="totalSeats"
                            onChange={this.handleInput}
                            value={this.state.totalSeats}
                          />
                        </div>
                      </div>
                    </Stack>
                  </div>

                  <div className="form-group ">
                    <input
                      type="Number"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Bus Number"
                      name="busNumber"
                      onChange={this.handleInput}
                      value={this.state.busNumber}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Driver's Name"
                      name="driverName"
                      onChange={this.handleInput}
                      value={this.state.driverName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="Number"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Contact Number"
                      name="driverContactNum"
                      onChange={this.handleInput}
                      value={this.state.driverContactNum}
                    />
                  </div>
                  <button
                    type="submit"
                    className="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
                  >
                    Add Bus
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBusComponent;
