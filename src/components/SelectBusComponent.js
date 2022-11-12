import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Divider from "@mui/material/Divider";

class SelectBusComponent extends Component {
  render() {
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
                        defaultValue="2022-01-01"
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

        <div className="card col-12 col-md-10 offset-md-1 mb-4">
          <div className="card-body  p-4 ">
            <div className="row">
              <div className="col-sm-9 ">
                {" "}
                <h2>Bus No.1</h2>
              </div>
              <div className="col-12 col-sm-3 ">
                <h5>Regular</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-12 p-3 ">
                LNMIIT <ArrowForwardIcon /> Ajmeri Gate
              </div>
            </div>
            <Divider />
            <div className="row mt-2">
              <div className="col-sm-9 col-12 my-3">
                <AccessTimeIcon />
                Departure Time: {"11:15 AM"}
              </div>

              <div className="col-sm-3 col-6 offset-3 offset-sm-0">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm d-flex mb-2 btn-block justify-content-center nav-link"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="row d-flex py-3 justify-content-center">
              <div className="align-item-center">
                Bookings will get closed at 11 AM
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectBusComponent;
