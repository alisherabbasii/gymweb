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
                                    <h4>COMPANY</h4>
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
                                        <li><a href="#">Monday 11am-7pm</a></li>
                                        <li><a href="#"> Tuesday-Friday 11am-8pm</a></li>
                                        <li><a href="#"> Saturday 10am-6pm</a></li>
                                        <li><a href="#"> Sunday 11am-6pm</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
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
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                {/* <!-- logo --> */}
                                <div className="footer-logo">
                                    <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt="" /></a>
                                </div>
                                <div className="footer-tittle">
                                    <div className="footer-pera">
                                        <p className="info1">GThe trade war currently ensuing between te US anfd several natxions around thdhe globe, most fiercely with.</p>
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
                                <p> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
   Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. </p>
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