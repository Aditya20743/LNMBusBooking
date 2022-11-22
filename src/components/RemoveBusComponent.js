import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import moment from "moment";

class RemoveBusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(new Date()).format("YYYY-MM-DD"),
      selectedBus: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ ...this.state, [name]: value });
  }

  render() {
    if (this.props.bus.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.bus.errMess) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: {this.props.bus.errMess}</h6>
          </div>
        </div>
      );
    } else if (
      this.props.auth.user === null ||
      this.props.auth.user.role !== "admin"
    ) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: Unauthorized Access</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Remove Bus</h2>
          </div>
          <div className="row-fluid mb-5 align-self-center mt-4">
            <div className="col">
              <div className="card col-12 col-md-8 col-xl-6 offset-xl-3 offset-md-2  align-self-center">
                <div className="card-body align-self-center p-4">
                  <form>
                    <div className="pt-3 d-flex justify-content-center">
                      <Stack component="form" noValidate spacing={3}>
                        <TextField
                          id="date"
                          label="Select Date"
                          type="date"
                        defaultValue={this.state.date}
                        sx={{ width: 220 }}
                          name="date"
                          value={this.state.date}
                          onChange={this.handleInput}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Stack>
                    </div>

                    <div className="input-group justify-content-center mt-4 mb-4 ">
                      <select
                        className="form-select p-1"
                        id="inputGroupSelect02"
                        name="selectedBus"
                        onChange={this.handleInput}
                        value = {this.state.selectedBus}
                        
                      >
                        <option selected disabled value="">
                          Select the Bus
                        </option>
                        {this.props.bus.bus.filter(
                          (bus) => bus.date === this.state.date
                        ).length === 0 ? (
                          <div className="d-flex align-self-center justify-content-center my-4">
                            <h5>No Buses Available </h5>
                          </div>
                        ) : (
                          this.props.bus.bus
                            .filter((bus) => bus.date === this.state.date)
                            .map((bus) => {
                              return (
                                <option value= {JSON.stringify(bus)} key={bus._id}>
                                  <div style={{"word-wrap": "break-word"}}>
                                  Bus No. {bus.busNumber}, {bus.source} to{" "}
                                  {bus.destination}, {moment(bus.time, "hh:mm").format("LT")}, {bus.busType}
                                  </div>
                                </option>
                              );
                            })
                        )}
                      </select>
                    </div>
                  </form>
                  <div className="row m-3 pt-2 pt-2 pd-2">
                    {this.state.selectedBus === "" ? (
                      <button
                        type="button"
                        className="cardBtn btn text-white disabled btn d-flex mb-3 btn-block justify-content-center "
                      >
                        Delete Bus
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="cardBtn btn-primary btn d-flex mb-3 btn-block justify-content-center nav-link"
                        onClick={() =>
                          this.props.deleteBus(
                            this.props.auth.user,
                            JSON.parse(this.state.selectedBus)
                          )
                        }
                      >
                        Delete Bus
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default RemoveBusComponent;
