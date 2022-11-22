import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class RequestSpecialBusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "",
      destination: "",
      date: "",
      time: "",
      purpose: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postSpecialBusRequest(this.props.auth.user, {...this.state, status:"pending",busType:"Special"});
    
    this.setState({ source: "", destination: "", date: "", time: "", purpose: "" });
  }

  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ ...this.state, [name]: value });
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
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group pt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="source"
                      name="source"
                      placeholder="Boarding Point"
                      onChange={this.handleInput}
                      value = {this.state.source}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="destination"
                      name="destination"
                      onChange={this.handleInput}
                      value = {this.state.destination}
                      placeholder="Destination Point"
                    />
                  </div>
                  <div className="pt-3 form-group">
                    <Stack component="form" noValidate spacing={3}>
                      <TextField
                        id="date"
                        label="Select Date"
                        type="date"
                        name = "date"
                        defaultValue={this.state.date}
                        onChange={this.handleInput}
                        value = {this.state.date}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        id="time"
                        name = "time"
                        label="Select Time"
                        type="time"
                        model = ".time"
                        className=""
                        defaultValue="06:00"
                        onChange={this.handleInput}
                        value = {this.state.time}
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
                      name="purpose"
                      className="form-control"
                      id="purpose"
                      rows="3"
                      placeholder="Purpose"
                      onChange={this.handleInput}
                      value = {this.state.purpose}
                    ></textarea>
                  </div>
                  <button
                      type="submit"
                      className="cardBtn btn-primary btn d-flex mb-3 btn-block justify-content-center nav-link"
                    >
                    Submit
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

export default RequestSpecialBusComponent;
