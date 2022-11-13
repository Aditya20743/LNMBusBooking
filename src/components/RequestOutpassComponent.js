import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class RequestOutpassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guardianName: "",
      guardianContactNo: "",
      departureDate: "",
      returnDate: "",
      purpose: "",
      hostelName: "",
      roomNumber: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postOutpass(this.props.auth.user, {...this.state, status:"pending"});
    this.setState({guardianName: "",guardianContactNo: "",departureDate: "",returnDate: "",purpose: "",hostelName: "",roomNumber: ""});
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
            <h2>Request Outpass</h2>
          </div>
          <div className="row-fluid mb-5 align-self-center mt-4">
            <div className="card col-12 col-sm-10 col-md-8 col-xl-6 offset-xl-3 offset-md-2 offset-sm-1 align-self-center ">
              <div className="card-body align-self-center p-4">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group pt-4">
                    <input
                      type="text"
                      className="form-control"
                      id="guardianName"
                      placeholder="Guardian Name"
                      name="guardianName"
                      onChange={this.handleInput}
                      value={this.state.guardianName}
                    />
                  </div>
                  <div className="form-group  ">
                    <input
                      type="number"
                      className="form-control"
                      id="guardianContactNo"
                      placeholder="Guardian Contact No."
                      name="guardianContactNo"
                      onChange={this.handleInput}
                      value={this.state.guardianContactNo}
                    />
                  </div>

                  <div className="form-group pt-3 ">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div className="col-12 col-lg-6 mb-2">
                          <TextField
                            id="departureDate"
                            label="Departure Date"
                            type="date"
                            defaultValue="2022-01-01"
                            name="departureDate"
                            onChange={this.handleInput}
                            value={this.state.departureDate}
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                        <div className="col-12 col-lg-6">
                          <TextField
                            id="returnDate"
                            label="Return Date"
                            name="returnDate"
                            onChange={this.handleInput}
                            value={this.state.returnDate}
                            type="date"
                            defaultValue="2022-01-01"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </div>
                      </div>
                    </Stack>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="input-group mt-2 ">
                        <select
                          className="form-select p-2"
                          id="inputGroupSelect02"
                          placeholder="Hostel Name"
                          name="hostelName"
                          onChange={this.handleInput}
                          value={this.state.hostelName}
                        >
                          <option selected disabled>
                            Hostel Name
                          </option>
                          <option value="GH-1">GH-1</option>
                          <option value="BH-1">BH-1</option>
                          <option value="BH-2">BH-2</option>
                          <option value="BH-3">BH-3</option>
                          <option value="BH-4">BH-4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-6 mt-2">
                      <div className="form-group  ">
                        <input
                          type="text"
                          class="form-control"
                          id="formGroupExampleInput"
                          placeholder="Room No."
                          name="roomNumber"
                          onChange={this.handleInput}
                          value={this.state.roomNumber}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="purpose"></label>
                    <textarea
                      className="form-control"
                      id="purpose"
                      rows="3"
                      name="purpose"
                      value={this.state.purpose}
                      onChange={this.handleInput}
                      placeholder="Purpose"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="cardBtn btn-primary btn d-flex  mb-3 btn-block justify-content-center nav-link"
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

export default RequestOutpassComponent;
