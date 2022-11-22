import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";
import moment from "moment";
import { Link } from "react-router-dom";

const RenderBusCard = ({ bus }) => {
  const hour = bus.time.split(":")[0];
  const min = bus.time.split(":")[1];
  const newTime = moment.utc().hour(hour).minute(min).second(0);
  const time = moment.utc().hour(hour).minute(min).second(0);
  newTime.subtract(15, "m");
  return (
    <div className="card col-12 col-md-10 offset-md-1 mb-4">
      <div className="card-body p-3">
        <div className="row">
          <div className="col-sm-9 ">
            <h2>Bus No. {bus.busNumber}</h2>
          </div>
          <div className="col-12 col-sm-3 d-flex justify-content-end">
            <h5>{bus.busType}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-12 py-1 ps-2">
            <h5>
              {bus.source} <ArrowForwardIcon /> {bus.destination}
            </h5>
          </div>
        </div>
        <Divider />
        <div className="row mt-1">
          <div className="col-sm-9 col-12 my-3">
            <AccessTimeIcon />{" "}
            Departure Time: {time.format("LT")}
          </div>

          <div className="col-sm-3 col-6 offset-3 offset-sm-0">
          <Link to={`/bus/${bus._id}`} >
              <button
                type="button"
                className="btn btn-outline-primary btn-sm d-flex mb-2 btn-block justify-content-center nav-link"
              >
                Select
                <div className="my-0">
                  <ArrowForwardIcon />
                </div>
              </button>
              </Link>
            </div>
          
        </div>
        <div className="row d-flex py-1 justify-content-center">
          <div className="align-item-center">
            Bookings will get closed at {newTime.format("LT")}
          </div>
        </div>
      </div>
    </div>
  );
};

class SelectBusComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(new Date()).format("YYYY-MM-DD"),
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
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
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
    } else {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>Select Your Bus</h2>
          </div>
          <div className="row-fluid mb-5 align-self-center mt-4">
            <div className="col">
              <div className="card col-12 col-sm-10 col-md-8 col-xl-4 offset-xl-4 offset-md-2 offset-sm-1 align-self-center">
                <div className="card-body align-self-center p-4">
                  <form>
                    <div className="pt-1 ">
                      <Stack component="form" noValidate spacing={3}>
                        <TextField
                          id="date"
                          label="Select Date"
                          type="date"
                          defaultValue={this.state.date}
                          name = "date"
                          value={this.state.date}
                          onChange={this.handleInput}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Stack>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row-fluid mb-5 mt-4">
            {this.props.bus.bus.filter((bus) => bus.date === this.state.date).length === 0 ? (
              <div className="d-flex align-self-center justify-content-center my-4">
              <h5>No Buses :( </h5>
            </div>
            ) : (this.props.bus.bus.filter((bus) => bus.date === this.state.date).map((bus) => {
              return (
                <div key={bus._id} className="col-12 mb-4">
                  <RenderBusCard bus={bus} />
                </div>
              );
            })) }
          </div>
        </div>
      );
    }
  }
}

export default SelectBusComponent;
