import React from "react";

const Trainers = () =>{
    return(
<>
<section className="wantToWork-area w-padding">
            <div className="container">
                <div className="row align-items-end justify-content-between">
                    <div className="col-lg-6 col-md-9 col-sm-9">
                        <div className="section-tittle">
                            <span>oUR TEAM MAMBERS</span>
                            <h2>Our Most Exprienced Trainers</h2>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-3">
                        <a href="services.html" className="btn wantToWork-btn f-right">More Services</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Want To work End -->
        <!--? Team Ara Start --> */}
        <div className="team-area pb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/team1.png" alt=""/>
                                <div className="team-caption">
                                    <span>Creative derector</span>
                                    <h3><a href="#">Jhon Sunsaev</a></h3>
                                    {/* <!-- Blog Social --> */}
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/team2.png" alt=""/>
                                <div className="team-caption">
                                    <span>Creative derector</span>
                                    <h3><a href="#">Jhon Sunsaev</a></h3>
                                    {/* <!-- Blog Social --> */}
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-team mb-30">
                            <div className="team-img">
                                <img src="assets/img/gallery/team3.png" alt=""/>
                                <div className="team-caption">
                                    <span>Creative derector</span>
                                    <h3><a href="#">Jhon Sunsaev</a></h3>
                                    {/* <!-- Blog Social --> */}
                                    <div className="team-social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fas fa-globe"></i></a></li>
                                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
    )
}

export default Trainers;