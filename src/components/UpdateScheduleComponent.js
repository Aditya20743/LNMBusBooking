import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";

class UpdateScheduleComponent extends Component {
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
                    <form>
                      <div className="input-group  mt-4 mb-4 ">
                        <div className="row ">
                          <div className="col p-2">
                            <select
                              className="form-select p-2"
                              id="inputGroupSelect02"
                            >
                              <option selected disabled>
                                Select the Day
                              </option>
                              <option value="1">Monday</option>
                              <option value="2">Tuesday</option>
                              <option value="3">Wednesday</option>
                              <option value="4">Thursday</option>
                              <option value="5">Friday</option>
                              <option value="6">Saturday</option>
                              <option value="7">Sunday</option>
                            </select>
                          </div>
                          <div className="col p-2">
                            <select
                              className="form-select p-2 "
                              id="inputGroupSelect02"
                            >
                              <option selected disabled>
                                Select the Bus
                              </option>
                              <option value="1">Monday</option>
                              <option value="2">Tuesday</option>
                              <option value="3">Wednesday</option>
                              <option value="4">Thursday</option>
                              <option value="5">Friday</option>
                              <option value="6">Saturday</option>
                              <option value="7">Sunday</option>
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
                        />
                      </div>
                    </div>

                    <div className="col-6 col-md-9 ">
                      <div className="input-group justify-content-end  ">
                        <select
                          className="form-select p-2"
                          id="inputGroupSelect02"
                        >
                          <option selected disabled>
                            Select Bus Type
                          </option>
                          <option value="1">Regular</option>
                          <option value="2">Special</option>
                        </select>
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
                        >
                          <option selected>Monday</option>
                          <option value="1">Tuesday</option>
                          <option value="2">Wednesday</option>
                          <option value="3">Thursday</option>
                          <option value="4">Friday</option>
                          <option value="5">Saturday</option>
                          <option value="6">Sunday</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm col-sm-2 mt-3">Seats:-</div>
                    <div className="col-12 col-sm-4 col-md-2 mt-2">
                      <div className="form-group  ">
                        <input
                          type="number"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Total Seats in Bus"
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
                  type="button"
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
