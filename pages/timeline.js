import React from 'react';

const Timeline = () => {
    return (
        <div>
            <section className="section-padding pb-0" id="timeline">
                <div className="container">
                    <div className="row">

                        <h2 className="text-center mb-lg-5 mb-4">Our Timeline</h2>
                        
                        <div className="timeline">
                            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                    <h3 className=" text-light">Get the vaccine</h3>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                </div>

                                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                    <i className="bi-patch-check-fill timeline-icon"></i>
                                </div>

                                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                    <time>2021-07-31 Saturday</time>
                                </div>
                            </div>

                            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                                <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                    <h3 className=" text-light">Consulting your health</h3>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                </div>

                                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                    <i className="bi-book timeline-icon"></i>
                                </div>

                                <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                                    <time>2021-07-15 Thursday</time>
                                </div>
                            </div>

                            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                    <h3 className=" text-light">Certified Nurses</h3>

                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                </div>

                                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                    <i className="bi-file-medical timeline-icon"></i>
                                </div>

                                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                    <time>2021-06-28 Monday</time>
                                </div>
                            </div>

                            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes my-lg-5 my-4">
                                <div className="col-9 col-md-5 ms-md-4 ms-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                    <h3 className=" text-light">Covid-19 Hospitals</h3>

                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                    
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                </div>

                                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                    <i className="bi-globe timeline-icon"></i>
                                </div>

                                <div className="col-9 col-md-5 pe-md-3 pe-lg-0 order-1 order-md-3 py-4 timeline-date">
                                    <time>2021-05-30 Sunday</time>
                                </div>
                            </div>

                            <div className="row g-0 justify-content-end justify-content-md-around align-items-start timeline-nodes">
                                <div className="col-9 col-md-5 me-md-4 me-lg-0 order-3 order-md-1 timeline-content bg-white shadow-lg">
                                    <h3 className=" text-light">Freelance Nursing</h3>

                                    <p>ILorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem tenetur debitis laudantium?</p>
                                </div>

                                <div className="col-3 col-sm-1 order-2 timeline-icons text-md-center">
                                    <i className="bi-person timeline-icon"></i>
                                </div>

                                <div className="col-9 col-md-5 ps-md-3 ps-lg-0 order-1 order-md-3 py-4 timeline-date">
                                    <time>2021-05-18 Tuesday</time>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Timeline;
