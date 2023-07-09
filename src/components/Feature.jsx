import React from 'react';
import '../css/Features.css';
import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'

const Feature = () => {
  return (
    <div className='features'>
      <h1>
        Simple interface through which
        <br />
        tasks can be easily managed
      </h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={feature1} alt=""/>
            <h4>Book A Call+</h4>
            <p>Customer activity can be easily tracked with one click</p>
          </div>
          <div className="col">
            <img src={feature2} alt=""/>
            <h4>Get Proper Tax Instructions</h4>
            <p>Customers can leave their own comments and feedback</p>
          </div>
          <div className="col">
            <img src={feature3} alt=""/>
            <h4>Grow Your Business</h4>
            <p>The results show how much work has been done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
