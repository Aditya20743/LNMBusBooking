import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='container'>
                {/* <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top ml-auto"> */}
                    <div className='row'>
                    <div className="col-3 mb-3">
                        <a
                            className="d-flex align-items-center mb-0 link-dark text-decoration-none"
                        >
                           <img src="assests/images/footer-logo.png" alt="LNMBus" width="350" height="135" className="mt-1 py-4 pl-5" />

                        </a>
                        {/* <p className="text-muted">© 2022</p> */}

                        
                    </div>
                    <div className="col mb-3 "></div>
                    <div className="col mb-3">
                        <ul className="nav flex-column ">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    Refund Rules
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    Terms & Conditions
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="col mb-3">
                        
                        <ul className="nav flex-column">
                            
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    Need Help?
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        
                        <ul className="nav flex-column">
                            
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    About
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-white">
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </div>
                    </div>
                </div>
            </footer>





        )
    }
}

export default Footer