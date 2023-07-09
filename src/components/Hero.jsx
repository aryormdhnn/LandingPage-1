import ImageHero from '../assets/ImageHero.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import '../css/Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="hero-text">
                        <h1>A Modern, Smart Approach to Sales Tax Compliance</h1>
                        <p>We help e-commerce businesses to get them compliant with sales tax in the US.</p>
                        <button className="btn-hero">Book A Meeting</button>
                        <hr className='divider'/>
                        <div className="trusted-brand">
                            <h5>Trusted by big brands</h5>
                            <div className="row">
                                {
                                    [logo1, logo2, logo3].map((logo, index) => (
                                        <div className="col-lg-4 col-md-4 col-sm-4 col-4" key={index}>
                                            <img src={logo} alt="shopify"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="hero-image">
                        <img src={ImageHero} alt="hero"/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero