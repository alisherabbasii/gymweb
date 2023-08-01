import React from "react";

const OurServices = () =>{
    return(
        <section id="services" className="services-area pt-100 pb-150 section-bg" style={{backgroundImage:  "url(assets/img/gallery/section_bg01.png) "}}>
        {/* <!--? Want To work --> */}
        <section className="wantToWork-area w-padding">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 col-md-10 col-sm-10">
                        <div className="section-tittle section-tittle2">
                            <span>oUR sERVICES FOR YOU</span>
                            <h2>PUSH YOUR LIMITS FORWARD We Offer to you</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <a href="services.html" className="btn wantToWork-btn f-right">More Services</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Want To work End --> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <i className="flaticon-fitness"></i>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">QUALITY EQUIPMENT</a></h5>
                            <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                        </div>
                        <div className="img-cap">
                            <a href="services.html" className="">Discover More About Us <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <i className="flaticon-healthcare-and-medical"></i>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">health caring</a></h5>
                            <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                        </div>
                        <div className="img-cap">
                            <a href="services.html" className="">Discover More About Us <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-cat text-center mb-50">
                        <div className="cat-icon">
                            <i className="flaticon-clock"></i>
                        </div>
                        <div className="cat-cap">
                            <h5><a href="services.html">gym strategies</a></h5>
                            <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                        </div>
                        <div className="img-cap">
                            <a href="services.html" className="">Discover More About Us <i className="ti-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default OurServices;