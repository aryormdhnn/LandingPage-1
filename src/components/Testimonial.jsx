import React from 'react';
import '../css/Testimonial.css';
import {FaStar} from 'react-icons/fa';
import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.png';

const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="testimonial-text">
                                <p>2,157 people have said how good Rareblocks</p>
                                <h2>Our happy clients say about us</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body testi">
                                <div className="star">
                                    {[...Array(5)].map((_, index) => (<FaStar key={index}/>))}
                                </div>
                                <p>“You made it so simple. My new site is so much faster and easier to work with
                                    than my old site. I just choose the page, make the change.”
                                </p>
                                <div className="user-profile">
                                    <img src={user1} alt="User 1"/>
                                    <div className="name">
                                        <h4>David Williams</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body testi">
                                <div className="star">
                                    {[...Array(5)].map((_, index) => (<FaStar key={index}/>))}
                                </div>
                                <p>
                                    “Simply the best. Better than all the rest. I’d recommend this product to
                                    beginners and advanced users.”
                                </p>
                                <div className="user-profile">
                                    <img src={user2} alt="User 2"/>
                                    <div className="name">
                                        <h4>David Williams</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body testi">
                                <div className="star">
                                    {[...Array(5)].map((_, index) => (<FaStar key={index}/>))}
                                </div>
                                <p>
                                    “I cannot believe that I have got a brand new landing page after getting Omega.
                                    It was super easy to edit and faster and easier to work.”
                                </p>
                                <div className="user-profile">
                                    <img src={user3} alt="User 3"/>
                                    <div className="name">
                                        <h4>David Williams</h4>
                                        <p>Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="btn-testi">Check all 2,157 reviews</p>
            </div>
        </div>
    );
};

export default Testimonial;