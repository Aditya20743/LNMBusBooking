import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class AddBusComponent extends Component {
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
                <form>
                  <div className="form-group pt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Source"
                    />
                  </div>
                  <div className="form-group  ">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Destination"
                    />
                  </div>

                  <div className="form-group pt-3">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row-flex d-flex">
                        <div className="input-group align-self-left mb-4">
                          <select
                            className="form-select"
                            id="inputGroupSelect02"
                            style={{ width: "130px" }}
                          >
                            <option selected disabled>
                              Select Day
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

                        <div className="align-self-right mb-4 ml-3">
                          <TextField
                            id="time"
                            label="Departure Time"
                            type="time"
                            defaultValue="06:00"
                            sx={{}}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                    </Stack>
                  </div>

                  <div className="form-group">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div className="input-group col-6 col-xl-4 mb-4">
                          <select
                            className="form-select"
                            id="inputGroupSelect02"
                          >
                            <option selected disabled>
                              Select Type
                            </option>
                            <option value="1">Regular</option>
                            <option value="2">Special</option>
                          </select>
                        </div>

                        <div className="form-group col-6 col-xl-8 mb-4 ">
                          <input
                            type="number"
                            className="form-control"
                            id="formGroupExampleInput"
                            placeholder="Total Seats"
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
                    />
                  </div>

                  <div className="input-group justify-content-center mt-4 mb-4">
                    <select className="form-select p-2" id="inputGroupSelect02">
                      <option selected disabled>
                        Bus Driver Name
                      </option>
                      <option value="1">Ghanshyam</option>
                      <option value="2">Suresh</option>
                      <option value="3">Mohan</option>
                      <option value="4">Mukesh</option>
                      <option value="5">Radheshyam</option>
                    </select>
                  </div>
                </form>
                <div className="row m-3 pt-2 pt-2 pd-2">
                  <button
                    type="button"
                    className="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
                  >
                    Add Bus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBusComponent;

// Padding
// Bus Number in which form
// Which Conductor ??
