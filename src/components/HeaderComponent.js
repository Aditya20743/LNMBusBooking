import React, { Component } from 'react'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//add bootstrap links

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className='container-fluid  mx-5'> 
          <a className="navbar-brand" href="/">
            <img src="assests/images/logo.png" alt="LNMBus" width={150} height="150" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
                <p className="nav-link fs-5" href="#">
                  Home <span className="sr-only">(current)</span>
                </p>
              </li>
              <li className="nav-item  "  >
                <a className="nav-link" href="#">
                  View Schedule <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Request Bus   <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  Manage Booking
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Book Ticket
                  </a>
                  <a className="dropdown-item" href="#">
                    Cancel Ticket
                  </a>
                  <a className="dropdown-item" href="#">
                    View Trips
                  </a>


                </div>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  <QrCodeScannerIcon /> <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  <WalletOutlinedIcon /> <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
              <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                >
                  <AccountCircleIcon  fontSize='large'/> <span className="sr-only">(current)</span>
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </div>
              </li>



            </ul>
          </div>
          </div>
        </nav>
    )
  }
}

export default Header

// add image icon of different users