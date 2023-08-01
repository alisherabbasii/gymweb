import React from "react";


const AboutUs = () =>{
    return(
        <section id="about" className="about-area section-padding30">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                    {/* <!-- about-img --> */}
                    <div className="about-img ">
                        <img src="assets/img/gallery/about.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about-caption">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle section-tittle3 mb-35">
                            <span>ABOUT oUR GYM</span>
                            <h2>Safe Body building proper Solutions That Saves our Valuable Time!</h2>
                        </div>
                        <p className="pera-top">Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                        <p className="mb-65 pera-bottom">Brook presents your services with flexible, convefnient and chient anipurpose layouts. You can select your favorite layouts.</p>
                        <a href="from.html" className="btn">became a member</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutUs;