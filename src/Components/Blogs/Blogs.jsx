import React from "react";

const Blogs = () =>{
    return(
        <section id="blog" className="home-blog-area section-padding30">
        <div className="container">
            {/* <!-- Section Tittle --> */}
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-sm-10">
                    <div className="section-tittle text-center mb-100">
                        <span>rECENT NEWS FORM BLOG</span>
                        <h2>gYM TIPS news fOR YOU THAT selected by us</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                        <div className="blog-img-cap">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog1.png" alt="" />
                                {/* <!-- Blog date --> */}
                                <div className="blog-date text-center">
                                    <span>24</span>
                                    <p>Now</p>
                                </div>
                            </div>
                            <div className="blog-cap">
                                <span>Creative derector</span>
                                <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="home-blog-single mb-30">
                        <div className="blog-img-cap">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog2.png" alt="" />
                                {/* <!-- Blog date --> */}
                                <div className="blog-date text-center">
                                    <span>24</span>
                                    <p>Now</p>
                                </div>
                            </div>
                            <div className="blog-cap">
                                <span>Creative derector</span>
                                <h3><a href="blog_details.html">Footprints in Time is perfect House in Kurashiki</a></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Blogs;