import React, { Component } from "react";
import QRCode from "qrcode";

class QrcodeComponent extends Component {
  componentDidMount() {
    if (this.props.auth.user) {
      this.generateQRCode(this.props.auth.user.uid);
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      qrcode: "",
    };

    this.generateQRCode = this.generateQRCode.bind(this);
  }

  generateQRCode(id) {
    QRCode.toDataURL(
      id,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#0b467b",
          light: "#FFFFFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        this.setState({ qrcode: url });
      }
    );
  }

  render() {
    if (!this.props.auth.user) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>ERROR: You are not authorized.</h6>
          </div>
        </div>
      );
    } else if (this.props.auth.isLoading) {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h6>Loading...</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container pt-5 c-width">
          <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
            <h2>QR Code</h2>
          </div>
          <div className="row d-flex justify-content-center align-self-center mt-3">
            <div className="col-7 col-md-5 col-lg-4 col-xl-3 mb-4">
              <img
                className="phone-bg-image"
                src="./assests/images/phonebg.png"
                alt=""
              />
              {this.state.qrcode ? (
                <img src={this.state.qrcode} alt="qrcode" className="qrimage" />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default QrcodeComponent;
