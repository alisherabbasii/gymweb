import React from "react";

const Footer = () =>{
    return(
        <footer>
        {/* <!--? Footer Start--> */}
        <div className="footer-area section-bg" style={{backgroundImage:'url("assets/img/gallery/section_bg03.png")'}}  >
            <div className="container">
                <div className="footer-top footer-padding">
                    {/* <!-- Footer Menu --> */}
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>IK FITNESS</h4>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Company</a></li>
                                        <li><a href="#"> Press & Blog</a></li>
                                        <li><a href="#"> Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Open hour</h4>
                                    <ul>
                                        
                                        <li><a href="#"> Monday- Saturday open 24/7 </a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>RESOURCES</h4>
                                    <ul>
                                        <li><a href="#">Home Insurance</a></li>
                                        <li><a href="#">Travel Insurance</a></li>
                                        <li><a href="#"> Car Insurance</a></li>
                                        <li><a href="#"> Business Insurance</a></li>
                                        <li><a href="#"> Heal Insurance</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                {/* <!-- logo --> */}
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="info1">Your health and wellness journey starts here. Ready to join our fitness family?</p>
                                    </div>
                                </div>
                                {/* <!-- Footer Social --> */}
                                <div className="footer-social ">
                                    <a href="https://www.facebook.com/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fas fa-globe"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer Bottom --> */}
                <div className="footer-bottom">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-12">
                            <div className="footer-copy-right text-center">
                                <p> 
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Eagle Libre Solutions 
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer;