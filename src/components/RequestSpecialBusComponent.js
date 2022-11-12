import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class RequestSpecialBusComponent extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
      // console.log("Current State is: " + JSON.stringify(values));
      // this.props.postFeedback(values);
      // this.props.resetFeedbackForm();
  }

  render() {
    
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Request Special Bus</h2>
        </div>
        <div className="row-fluid mb-5 align-self-center mt-4">
          <div className="col">
            <div className="card col-12 col-sm-10 col-md-8 col-xl-6 offset-xl-3 offset-md-2 offset-sm-1 align-self-center">
              <div className="card-body align-self-center p-4">
                <form model="specialBusRequest" onSubmit={this.handleSubmit}>
                  <div className="form-group pt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="source"
                      placeholder="Boarding Point"
                      model=".source"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      placeholder="Destination Point"
                      model=".destination"
                    />
                  </div>
                  <div className="pt-3 form-group">
                    <Stack component="form" className="" noValidate spacing={3}>
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
                        sx={{ width: 220 }}
                      />
                    </Stack>
                  </div>
                  <div className="form-group">

                    <textarea
                      model=".purpose"
                      className="form-control"
                      id="purpose"
                      rows="3"
                      placeholder="Purpose"
                    ></textarea>
                  </div>
                  <button
                      type="button"
                      className="cardBtn btn-primary btn d-flex mb-3 btn-block justify-content-center nav-link"
                    >
                      Submit
                    </button>
                  <div className="form-group row m-3 pt-2 pt-2 pd-2">
             
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestSpecialBusComponent;
