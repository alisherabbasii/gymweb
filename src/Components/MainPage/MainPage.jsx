import React from "react";


const MainPage = () =>{
    return(
        <div id="home" className="slider-area position-relative">
        <div className="slider-active">
            {/* <!-- Single Slider --> */}
            <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div className="hero__caption">
                                <span data-animation="fadeInLeft" data-delay="0.1s">with patrick potter</span>
                                <h1 data-animation="fadeInLeft" data-delay="0.4s">Build Perfect body Shape for good and Healthy life.</h1>
                                <a href="from.html" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.8s">became a member</a>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        
        {/* <!-- Video icon --> */}
        <div className="video-icon">
            <a className="popup-video btn-icon" href="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></a>
        </div>
    </div>
    )
}

export default MainPage;