import React from 'react'
import ImageHero from '../assets/ImageHero.png'
import '../css/Hero.css'

const Hero = () => {
    return (
            <div className="hero">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="hero-text">
                            <h1>A Modern, Smart Approach to Sales Tax Compliance</h1>
                            <p>We help e-commerce businesses to get them compliant with sales tax in the US.</p>
                            <button className="btn btn-hero">Hire Me</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="hero-image">
                            <img
                                src={ImageHero}
                                alt="hero"/>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default Hero