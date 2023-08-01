import React from "react";

const ClientFeedback = () =>{
    return(
        <section className="about-area2 testimonial-area section-padding30 fix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-11 col-sm-11">
                    {/* <!-- about-img --> */}
                    <div className="about-img2">
                        <img src="assets/img/gallery/about2.png" alt=""/>
                        {/* <!-- Shape --> */}
                        <div className="shape-qutaion d-none d-sm-block">
                            <img src="assets/img//gallery/qutaion.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-9 col-sm-9">
                    <div className="about-caption">
                        {/* <!-- Section Tittle --> */}
                        <div className="section-tittle mb-55">
                            <span>Client Feedback</span>
                            <h2>What Our Client thik about our gym</h2>
                        </div>
                        {/* <!-- Testimonial Start --> */}
                        <div className="h1-testimonial-active">
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial">
                                <div className="testimonial-caption">
                                    <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.</p>
                                    <div className="rattiong-caption">
                                        <span>Jhon Smith<span>Gym Trainer</span> </span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Single Testimonial --> */}
                            <div className="single-testimonial">
                                <div className="testimonial-caption">
                                    <p>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replica;ition of thei designers ijtls intended csents your se.</p>
                                    <div className="rattiong-caption">
                                        <span>Jhon Smith<span>Gym Trainer</span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Testimonial End --> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ClientFeedback;