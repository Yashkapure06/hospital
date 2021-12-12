import React from 'react';
import Image from "../components/image";


const Testimonial = () => {
    return (
        <div>
            <section className="section-padding pb-0" id="reviews">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <h2 className="text-center mb-lg-5 mb-4">Treatments provided by us</h2>

                            <div>                             
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla et quaerat minus distinctio at libero assumenda aliquid, quas praesentium molestiae ipsam illo a alias perferendis, eum exercitationem
                                </p>
                                <Image/><br/>
                                <Image/><br/>
                                <Image/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonial;
