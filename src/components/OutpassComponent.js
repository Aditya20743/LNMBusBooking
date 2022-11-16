import React, { Component } from "react";
import Divider from "@mui/material/Divider";

class OutpassComponent extends Component {
  render() {
    return (
      <div className="container pt-5 c-width">
        <div className="up-row d-flex justify-content-center row-fluid pt-5 align-self-center ">
          <h2>Outpass</h2>
        </div>
        <div className="row m-4">
          <div className="col-12 col-md-10 col-lg-5 my-3">
            <div className="card ">
              <div className="card-body justify-content-center p-4">
                
                  {
                  this.props.outpass.outpass.status === "pending" ?
                  <div className="row ">
                    <div className="col"><h5>Pending :</h5></div>
                    <div className="row pl-4">
                    <div className="col-12">
                      <h4>Krishan Kumar</h4>
                    </div>
                    <div className="col-12">
                      <h6>20UCS001 &nbsp;|&nbsp; BH3 - D720</h6>
                    </div>
                    <div className="col-12">Departure Date :- DD-MM-YY</div>
                    <div className="col-12">Return Date :- DD-MM-YY</div>
                    <div className="col-12">Purpose of Visit :- ABC</div>
                      </div>
                    </div>
                    :
                    <div className="row mt-3 d-flex justify-content-center ">
                      <div className="align-self-center"><h6>No Pending Request</h6></div>
                    </div>
                  }
                
                <div className="col-12 mt-4"><Divider/></div>
                <div className="row d-flex justify-content-center">
                  <div className="align-self-center p-4 ">
                    {
                      this.props.outpass.outpass.length === 0 ?
                      <button type="button" className="btn btn-outline-success">
                        Request Outpass
                      </button>
                        :
                      <button type="button" disabled className="btn btn-success">
                        Request Outpass
                      </button>
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-1 d-flex align-self-center justify-content-center">
              <div className="d-none d-lg-block" style={{ height: "40vh" }}>
                <Divider orientation="vertical"/>
              </div>
              <div className="d-lg-none d-block mt-5">
                <Divider textAlign="left" style={{ width: "80vw" }}><h5>Approved Outpass</h5></Divider>
              </div>
            </div>
          <div className="col-12 col-md-10 col-lg-6 mt-2 ">
            <div className="card">
              {
                this.props.outpass.outpass.status === "Approved"
                  ?
                  <div className="card-body p-4 ">
                    <div className="row">
                      <div className="col-sm-12 col-xl-9">
                        <h3>Krishan Kumar</h3>
                      </div>
                      <div className="col-12 col-xl-3">
                        <h5>20UCS001</h5>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12"><h6>BH3 - D720</h6></div>
                    </div>
                    <Divider />
                    <div className="row p-4">
                      <div className="col-12">Guardian Name :- Yash Jain</div>
                      <div className="col-12">Guardian Phone no:- 9845345643</div>
                      <div className="col-12">Departure Date :- DD-MM-YY</div>
                      <div className="col-12">Return Date :- DD-MM-YY</div>
                      <div className="col-12">Purpose of Visit :- ABC</div>
                    </div>
                  </div>
                  :
                  <div className="card-body p-5">
                    <div className="row d-flex justify-content-center ">
                      <div className="align-self-center"><h6>No Approved Outpass</h6></div>
                    </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OutpassComponent;
