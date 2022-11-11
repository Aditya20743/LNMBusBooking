import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class RequestSpecialBusComponent extends Component {
  render() {
    return (
      <div className="container pt-5">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Request Special Bus</h2>
        </div>
        <div className="row-fluid mb-5 align-self-center mt-4">
          <div className="col">
            <div className="card col-10 col-sm-6 col-md-6 col-xl-4 offset-auto offset-sm-4 align-self-center ">
              <div className="card-body align-self-center p-4">
                <form>
                  <div class="form-group pt-4">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Boarding Point"
                    />
                  </div>
                  <div class="form-group  ">
                    <input
                      type="number"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Destination Point"
                    />
                  </div>
                  <div className="pt-3 ">
                    <Stack component="form" noValidate spacing={3}>
                      <TextField
                        id="date"
                        label="Select Date"
                        type="date"
                        defaultValue="2022-01-01"
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
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
                        sx={{ width: 220 }}
                      />
                    </Stack>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Purpose"
                    ></textarea>
                  </div>
                </form>
                <div className="row m-3 pt-2 pt-2 pd-2">
                  <button
                    type="button"
                    class="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
                  >
                    Submit
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

export default RequestSpecialBusComponent;
