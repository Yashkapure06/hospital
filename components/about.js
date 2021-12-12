import React from 'react';

const About = () => {
    return (
        <div>
            <section className="section-padding" id="about">
                <div className="container">
                <h1 style={{"text-align": "center","padding":"20px","margin":"20px"}}>About Hospital Name</h1>
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="mb-lg-3 mb-3">Meet Dr. MAX</h2>

                            <p>
                                Protect yourself and others by wearing masks and washing hands frequently. 
                                Outdoor is safer than indoor for gatherings or holding events. 
                                People who get sick with Coronavirus disease (COVID-19) will 
                                experience mild to moderate symptoms and recover without special treatments.
                            </p>

                        </div>

                        

                        <div className="col-lg-4 col-md-5 col-12 mx-auto">
                            <div className="featured-circle bg-white shadow-lg d-flex justify-content-center align-items-center">
                                <p className="featured-text"><span className="featured-number">12</span> Years<br/> of Experiences</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                            <h2 className="mb-lg-3 mb-3">We can add Images of All the doctors </h2>

                            <p>
                                <strong> We can Add Images as well as Qualification. </strong><br/>
                                <strong> We can Add More about Out hospital. </strong><br/>
                                Protect yourself and others by wearing masks and washing hands frequently. 
                                Outdoor is safer than indoor for gatherings or holding events. 
                                People who get sick with Coronavirus disease (COVID-19) will 
                                experience mild to moderate symptoms and recover without special treatments.
                            </p>

                        </div>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-6 ps-0">
                            <img src="images/gallery/medium-shot-man-getting-vaccine.jpg" className="img-fluid galleryImage" alt="get a vaccine" title="get a vaccine for yourself"/>
                        </div>

                        <div className="col-lg-6 col-6 pe-0">
                            <img src="images/gallery/female-doctor-with-presenting-hand-gesture.jpg" className="img-fluid galleryImage" alt="wear a mask" title="wear a mask to protect yourself"/>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;
