import React from "react";


const AboutUs = () =>{
    return(
        <section id="about" className="about-area section-padding30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    {/* <!-- about-img --> */}
                    <div className="about-img ">
                        <img src="assets/img/gallery/about.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-caption">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle section-tittle3 mb-35">
                            <span>ABOUT oUR GYM</span>
                            <h2>Safe Body building proper Solutions That Saves your Valuable Time!</h2>
                        </div>
                        <p className="pera-top">At IK Fitness, we're passionate about helping you achieve your fitness goals and create a healthier, happier you. We believe that fitness is a journey, not a destination, and we're here to support you every step of the way.</p>
                        <p className="mb-65 pera-bottom">Supportive community, expert guidance, and results-oriented personalized plans. We're more than just a gym, we're your partner in health and wellness. </p>
                        <a href="from.html" className="btn">became a member</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs;