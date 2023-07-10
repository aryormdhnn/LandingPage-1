import React from 'react'
import '../css/Section.css'
import section1 from '../assets/section1.png'
import card1 from '../assets/Card1.png'

const Section = () => {
    return (
        <div className='section'>
            <div className="section1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={section1} alt="section1"/>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <h1>Meet tax experts online & solve tax problem fast</h1>
                                <p>Tax consultants help clients with a variety of tax-related issues. Mainly,
                                    they make sure clients comply with tax rule regulations, they also help
                                    individuals and businesses pay what they owe.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="flex-column align-items-center justify-content-center">
                                <h1>Reduce your risk of errors and missed deadlines</h1>
                                <p>The profile of tax has become much more visible not only from an investor and
                                    board perspective but also from a tax authority and public perspectivealso needs
                                    to take direct control of risk.</p>
                                <button className="btn-hero">Book A Call</button>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                            <img src={card1} alt="section1"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section