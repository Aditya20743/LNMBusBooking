import React, { Component } from "react";
import { Divider } from "@mui/material";

function RenderPassCard({ pass }) {
  return (
    <div className="card my-3  ">
      <div className="card-body align-self-center p-3">
        <div className="row">
          <div className="d-flex col-flex justify-content-center token-count-circle offset-2">
            <div className="align-self-center">
              <h1>{pass.numOfTokens}</h1> <h6>Tokens</h6>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-center h5 mt-2">
          Price: Rs. {pass.price}
        </div>

        <div className="row mt-3">
          <button
            type="button"
            class="cardBtn btn-primary btn d-flex p-2 mb-3 btn-block justify-content-center nav-link"
          >
            Purchase Now
            <div className="home-btn-icon ml-2"></div>
          </button>
        </div>
      </div>
    </div>
  );
}

class WalletComponent extends Component {
  render() {
    if (this.props.store.isLoading) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else if (this.props.store.errMess) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Error: {this.props.bus.errMess}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <div className="col-12 col-lg-4 col-md-6 mt-5">
              <div className="card mt-3">
                <div className="card-body ">
                  <div className="row">
                    <div className="col  d-flex justify-content-center align-self-center">
                      <div className="row h3">Tokens Available</div>
                    </div>
                    <div className="col-flex token-count-circle d-flex justify-content-center align-self-center ">
                      <div className="mt-4 pt-1 h1">16</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-0 col-lg-2 d-flex align-self-center justify-content-center">
              {/* <Divider orientation="vertical">Tokens Passes</Divider> */}
            </div>
            <div className="col-12 col-lg-6 mt-5">
              <div className="row">
                {this.props.store.store.map((pass) => {
                  return (
                    <div className="col-12 col-sm-6 col-lg-6">
                      <RenderPassCard pass={pass} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default WalletComponent;
