import React from "react";
import "./About.css";


const About = () => {

    return (

        <section className="about">


            <div className="about-content">


                <p className="about-label">
                    ABOUT TAILORLINK
                </p>


                <h2>
                    Where Craftsmanship
                    <br />
                    Meets Technology
                </h2>


                <p className="about-description">
                    TailorLink connects customers with talented tailors,
                    making custom fashion easier than ever.
                    Discover skilled professionals, share your ideas,
                    and create outfits designed uniquely for you.
                </p>


            </div>



            <div className="stats">


                <div className="stat-card">

                    <h3>
                        500+
                    </h3>

                    <p>
                        Professional Tailors
                    </p>

                </div>



                <div className="stat-card">

                    <h3>
                        10K+
                    </h3>

                    <p>
                        Happy Customers
                    </p>

                </div>



                <div className="stat-card">

                    <h3>
                        25K+
                    </h3>

                    <p>
                        Custom Designs
                    </p>

                </div>


            </div>


        </section>

    );

};


export default About;