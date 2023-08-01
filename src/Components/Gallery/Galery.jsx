import React from "react";

const Gallery = () =>{
    return(
        <div id="gallery" className="gallery-area">
        <div className="container-fluid p-0 fix">
            <div className="row">
                <div className="col-lg-6">
                    <div className="box snake mb-30">
                        <div className="gallery-img big-img" style={{backgroundImage: "url(assets/img/gallery/gallery1.png)"}}></div>
                        <div className="overlay">
                            <div className="overlay-content">
                                <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                <h3>Best fitness gallery</h3>
                                <p>Fitness, Body</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box snake mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage:"url(assets/img/gallery/gallery2.png);"}} ></div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box snake mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage:"url(assets/img/gallery/gallery3.png)"}}></div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box snake mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage:"url(assets/img/gallery/gallery4.png)"}}></div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="box snake mb-30">
                                <div className="gallery-img small-img" style={{backgroundImage:"url(assets/img/gallery/gallery5.png)"}}></div>
                                <div className="overlay">
                                    <div className="overlay-content">
                                        <a href="gallery.html"><i className="ti-arrow-top-right"></i></a>
                                        <h3>Best fitness gallery</h3>
                                        <p>Fitness, Body</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Gallery;