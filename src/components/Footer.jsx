import React from 'react'
import '../css/Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="cta">
                    <h2 className='col-10'>
                        Take action now to stay compliant.<br/>
                        Grow business without tension.
                    </h2>
                    <button className="btn-hero">Book A Meeting</button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <h5 className="footer-title">Company</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                                <li>
                                    <a href="#">Works</a>
                                </li>
                                <li>
                                    <a href="#">Career</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className="footer-title">Help</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Customer Support</a>
                                </li>
                                <li>
                                    <a href="#">Delivery Detailss</a>
                                </li>
                                <li>
                                    <a href="#">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className="footer-title">Resources</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Free eBooks</a>
                                </li>
                                <li>
                                    <a href="#">Development Tutorial</a>
                                </li>
                                <li>
                                    <a href="#">How to - Blog</a>
                                </li>
                                <li>
                                    <a href="#">Youtube Playlist</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5 className="footer-title">Contact</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Email</a>
                                </li>
                                <li>
                                    <a href="#">Phone</a>
                                </li>
                                <li>
                                    <a href="#">Address</a>
                                </li>
                                <li>
                                    <a href="#">Social Media</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='divider-footer'/>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>© Copyright 2022, All Rights Reserved. Develop by 
                                    <a href="#">Aryo Romadhon Vardhana</a>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>Terms & Conditions | Privacy Policy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer