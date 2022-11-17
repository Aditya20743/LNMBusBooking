import React, { Component } from "react";
import { Divider } from "@mui/material";

function RenderPassCard({ pass, handleSubmit }) {
  return (
    <div className="card my-3  ">
      <div className="card-body align-self-center p-3">
        <div className="row d-flex col-flex justify-content-center">
          <div className="d-flex col-flex justify-content-center token-count-circle">
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
            className="cardBtn btn-primary btn d-flex p-2 mb-3 btn-block justify-content-center nav-link"
            onClick={() => handleSubmit(pass.numOfTokens)}
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
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(noOfTokens) {
    this.props.updateWallet(this.props.auth.user, this.props.wallet.wallet, noOfTokens);
  }

  render() {
    if (this.props.store.isLoading && this.props.wallet.isLoading) {
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
            <h6>Error: {this.props.store.errMess}</h6>
          </div>
        </div>
      );
    } else if (this.props.wallet.errMess) {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <h6>Error: {this.props.wallet.errMess}</h6>
          </div>
        </div>
      );
    }else {
      return (
        <div className="container c-width pt-5">
          <div className="row up-row d-flex justify-content-center align-self-center">
            <div className="col-12 col-lg-5 col-md-7 mt-5">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8 col-lg-7 d-flex justify-content-center align-self-center">
                      <div className="row h3 mx-1">Tokens Available</div>
                    </div>
                    <div className="col-flex token-count-circle d-flex justify-content-center align-self-center">
                      <div className="mt-4 pt-1 h1">{this.props.wallet.isLoading ? "Loading" : ( this.props.wallet.wallet ) ? this.props.wallet.wallet.tokenNo : "Loading"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-1 d-flex align-self-center justify-content-center">
              <div className="d-none d-lg-block" style={{ height: "60vh" }}>
                <Divider orientation="vertical"/>
              </div>
              <div className="d-lg-none d-block mt-5">
                <Divider textAlign="left" style={{ width: "80vw" }}><h5>Bus Passes Available</h5></Divider>
              </div>
            </div>
            <div className="col-12 col-lg-6 my-3">
              <div className="row">
                {this.props.store.store.map((pass) => {
                  return (
                    <div className="col-6">
                      <RenderPassCard pass={pass}  handleSubmit = {this.handleSubmit}/>
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
