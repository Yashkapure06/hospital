import React from 'react';
import Link from 'next/link';

export default function hero() {
    return (
        <div>
            <section className="hero" id="hero">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div id="myCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/slider/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg" className="img-fluid" alt="images"/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="images/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg" className="img-fluid" alt="images"/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="images/slider/doctor-s-hand-holding-stethoscope-closeup.jpg" className="img-fluid" alt="images"/>
                                    </div>
                                </div>
                            </div>

                            <div className="heroText d-flex flex-column justify-content-center">

                                <h1 className="mt-auto mb-2">
                                    Better
                                    <div className="animated-info">
                                        <span className="animated-item">health</span>
                                        <span className="animated-item">days</span>
                                        <span className="animated-item">lives</span>
                                    </div>
                                </h1>

                                <p className="mb-4">Medic Care is Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cum fugit doloremque totam, neque aliquid quod, delectus molestiae fugiat facere aliquam sapiente debitis voluptas consequuntur voluptate modi ut nisi excepturi?.</p>

                                <div className="heroLinks d-flex flex-wrap align-items-center">
                                    <Link href="/about"><a className="custom-link me-4" data-hover="Learn More">Learn More</a></Link>

                                    <p className="contact-phone mb-0"><i className="bi-phone"></i> 010-020-0340</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
