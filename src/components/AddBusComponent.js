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
                  <div class="form-group pt-4">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Source"
                    />
                  </div>
                  <div class="form-group  ">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Destination"
                    />
                  </div>

                  <div className="form-group pt-3  ">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div class="input-group col-4 mb-4 mr-3">
                          <select class="form-select" id="inputGroupSelect02" style={{width: "70px"}}>
                            <option selected>Select Day</option>
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="4">Thursday</option>
                            <option value="5">Friday</option>
                            <option value="6">Saturday</option>
                            <option value="7">Sunday</option>
                          </select>
                        </div>

                        <div className="col-6  mb-4">
                          <TextField
                            id="time"
                            label="Departure Time"
                            type="time"
                            defaultValue="06:00"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                    </Stack>
                  </div>

                  <div className="form-group   ">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div class="input-group  col-6 col-xl-4 mb-4">
                          <select class="form-select" id="inputGroupSelect02">
                            <option selected>Select Bus Type</option>
                            <option value="1">Regular</option>
                            <option value="2">Special</option>
                          </select>
                        </div>

                        <div class="form-group col-6 col-xl-8 mb-4 ">
                          <input
                            type="number"
                            class="form-control"
                            id="formGroupExampleInput"
                            placeholder="Total Seats"
                          />
                        </div>
                      </div>
                    </Stack>
                  </div>

                  <div class="form-group ">
                    <input
                      type="Number"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Bus Number"
                    />
                  </div>
                  
                </form>
                <div className="row m-3 pt-2 pt-2 pd-2">
                  <button
                    type="button"
                    class="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
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