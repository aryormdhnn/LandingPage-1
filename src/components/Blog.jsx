import '../css/Blog.css'
import imageblog from '../assets/imageblog.png'
import imageblog2 from '../assets/imageblog2.png'

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blog-container">
                <h1>
                    Read our blog
                </h1>
                <p>
                    With lots of unique blocks, you can easily build a page without coding. Build
                    your next landing page.
                </p>
            </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card border-0">
                            <img src={imageblog} alt="blog"/>
                            <div className="card-body">
                                <p className="blog-text">November 25, 2022</p>
                                <h5 className="blog-title">A Holiday Tradition: Tax Extenders Slated to Expire at End of 2021</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-0">
                            <img src={imageblog2} alt="blog"/>
                            <div className="card-body">
                                <p className="blog-text">November 25, 2022</p>
                                <h5 className="blog-title">What Do Global Minimum Tax Rules Mean for Corporate Tax Policies?</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Blog