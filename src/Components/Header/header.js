import React from "react";
import { Link } from 'react-scroll';

const Header = () =>{
    return(
        <header>
        {/* <!--? Header Start --> */}
        <div className="header-area header-transparent">
            <div className="main-header header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        {/* <!-- Logo --> */}
                        <div className="col-xl-2 col-lg-2 col-md-1">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            <div className="menu-main d-flex align-items-center justify-content-end">
                                {/* <!-- Main-menu --> */}
                                <div className="main-menu f-right d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li style={{cursor:'pointer'}}><Link to="home" smooth={true} duration={900}>Home</Link></li>
                                            <li style={{cursor:'pointer'}}><Link to="about" smooth={true} duration={900}>About</Link> </li>
                                            <li style={{cursor:'pointer'}}><Link to="services" smooth={true} duration={900}>Services</Link> </li>
                                            <li style={{cursor:'pointer'}}>  <Link to="gallery" smooth={true} duration={900}>gallery</Link></li>
                                            <li style={{cursor:'pointer'}}> <Link to="blog" smooth={true} duration={900}>Blog</Link>
                                            </li>
                                            <li style={{cursor:'pointer'}} className="cursor-pointer">  <Link to="contact-us" smooth={true} duration={900}> Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="header-right-btn f-right d-none d-lg-block ml-30">
                                    <a href="#" className="btn header-btn"><Link to="contact-us" smooth={true} duration={900}>became a member</Link></a>
                                </div>
                            </div>
                        </div>   
                        {/* <!-- Mobile Menu --> */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
    </header>
    )
}

export default Header;