import React, { Component } from "react";
import QRCode from "qrcode";
import { useState } from "react";

class QrcodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      qrcode: "",
    };
  }

  render() {
    // const [url, setUrl] = this.state('')
    // const [qr, setQr] = this.state('')

    const GenerateQRCode = () => {
      QRCode.toDataURL(
        this.state.url,
        {
          width: 800,
          margin: 2,
          color: {
            dark: "#335383FF",
            light: "#EEEEEEFF",
          },
        },
        (err, url) => {
          if (err) return console.error(err);

          console.log(url);
          this.setState({ ...this.state, qrcode: url });
        }
      );
    };
    return (
      <div className="container pt-5 c-width">
        <div className="row up-row">
          <div className="col col-lg-5 offset-1 offset-xl-0 col-10 mt-3">
            <div className="app">
              <h1>QR Code Generator</h1>
              <input
                type="text"
                placeholder="https://google.com"
                value={this.state.url}
                onChange={(evt) =>
                  this.setState({ ...this.state, url: evt.target.value })
                }
              />
              <button onClick={GenerateQRCode}>Generate</button>
              <div className="col phone-bg-image ">
                <div className="col mt-5 mb-5 pt-5 pb-5 ">
                  {this.state.qrcode && (
                    <>
                      <img
                        src={this.state.qrcode}
                        alt="qrcode"
                        className="qrimage"
                      />
                      <a href={this.state.qrcode} download="qrcode.png">
                        Download
                      </a>
                    </>
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

export default QrcodeComponent;
