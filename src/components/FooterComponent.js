import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid p-2 pl-md-5 pl-sm-0 pl-3">
          <div className="row">
            <div className="col-10 col-sm-6 col-md-5 col-xl-3">
              <a className="d-flex align-items-center link-dark text-decoration-none" href = "/">
                <img
                  src="assests/images/footer-logo.png"
                  alt="LNMBus"
                  width="90%"
                  height="90%"
                  className="mt-1 py-4 pl-5 align-self-center"
                />
              </a>
            </div>
            <div className="col-xl-3 col-md-1 d-none d-md-block"></div>
            <div className="col-xl-2 col-sm-2 col-3 offset-1 offset-sm-0 mt-3">
              <ul className="nav flex-column ">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    Refund Rules
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-2 col-3 mt-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    Need Help?
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-sm-2 col-3 mt-3">
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    About
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="/" className="nav-link p-0 text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;