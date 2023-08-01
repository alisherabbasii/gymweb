import React from "react";

const MembershipOffers = () =>{
    return(
        <section className="wantToWork-area w-padding section-bg mb-5" style={{backgroundImage:'url("assets/img/gallery/section_bg02.png")'}}>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10">
                    <div className="wantToWork-caption">
                        <h2>April membership offer available Now</h2>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                    <a href="services.html" className="btn wantToWork-btn f-right">More Services</a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default MembershipOffers;