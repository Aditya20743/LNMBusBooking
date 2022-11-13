import React, { Component } from "react";



class ApproveOutpassComponent extends Component {
  render() {
    return (
      <div className="container c-width pt-5 ">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Outpass Request</h2>
        </div>
        <div className="row-fluid mb-5 mt-4">
          <div>
            <div className="card col-12">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <h4>Name: Abhay Gupta</h4>
                  </div>
                  <div className="col-lg-3 col-6">
                    <button type="button" className="btn btn-block btn-outline-success ">
                      Approve
                    </button>
                  </div>
                  <div className="col-lg-3 col-6">
                    <button type="button" className="btn btn-block btn-outline-danger">
                      Disapprove
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-lg-3 col-6">Roll No.: </div>
                  <div className="col-lg-3 col-6">20UCS001</div>
                </div>
                <div className="row mt-1">
                  
                  <div className="col-lg-3 col-6">Hostel: </div>
                  <div className="col-lg-3 col-6">BH-3</div>
                  <div className="col-lg-3 col-6">Room No.: </div>
                  <div className="col-lg-3 col-6">D-200</div>
                </div>
                <div className="row mt-1">
                  <div className="col-lg-3 col-6">Departure Date:</div>
                  <div className="col-lg-3 col-6">10/01/2022</div>
                  <div className="col-lg-3 col-6">Arrival Date:</div>
                  <div className="col-lg-3 col-6">14/01/2022</div>
                </div>

                <div className="row mt-1">
                  <div className="col-lg-3 col-6">Purpose:</div>
                  <div className="col-lg-9 col-6">
                    Mujhe Ghar Jaana hai!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproveOutpassComponent;

//PENDING RESPONSIVENESS + OTHER FIELDS
