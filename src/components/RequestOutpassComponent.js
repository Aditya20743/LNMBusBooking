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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.postOutpass(JSON.stringify(this.state));
    this.setState({
      guardianName: "", guardianContactNo: "", departureDate: "", returnDate: "", purpose: ""
    });
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
                      id="formGroupExampleInput"
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
                      id="formGroupExampleInput"
                      placeholder="Guardian Contact No."
                      name="guardianContactNo"
                      onChange={this.handleInput}
                      value={this.state.guardianContactNo}
                    />
                  </div>

                  <div className="form-group pt-3 ">
                    <Stack component="form" noValidate spacing={3}>
                      <div className="row">
                        <div className="col-12 col-xl-6 mb-4">
                          <TextField
                            id="date"
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
                        <div className="col-12 col-xl-6">
                          <TextField
                            id="date"
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

                  <div className="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
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
