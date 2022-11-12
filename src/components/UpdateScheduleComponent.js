import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class UpdateScheduleComponent extends Component {
  render() {
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Update Schedule</h2>
        </div>
        <div className="row-fluid mb-5 align-self-center mt-4">
          <div className="col">
            <div className="card col-10 col-sm-6 col-md-6 col-xl-4 offset-auto offset-sm-4 align-self-center ">
              <div className="card-body align-self-center p-4">
                <form>
                  <div class="input-group justify-content-center mt-4 mb-4 ">
                    <select class="form-select " id="inputGroupSelect02">
                      <option selected>Select the Day</option>
                      <option value="1">Monday</option>
                      <option value="2">Tuesday</option>
                      <option value="3">Wednesday</option>
                      <option value="4">Thursday</option>
                      <option value="5">Friday</option>
                      <option value="6">Saturday</option>
                      <option value="7">Sunday</option>
                    </select>
                  </div>
                </form>
                <div className="row m-3 pt-2 pt-2 pd-2">
                  <button
                    type="button"
                    class="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
                  >
                    Update Schedule
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

export default UpdateScheduleComponent;
