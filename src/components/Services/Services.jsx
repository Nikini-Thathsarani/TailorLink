import React from "react";
import "./Services.css";

const Services = () => {
    return (
        <section className="services">

            <div className="services-heading">

                <p className="section-label">
                    OUR SERVICES
                </p>

                <h2>
                    Crafted For Your Style
                </h2>

                <p>
                    From everyday alterations to completely
                    custom outfits, find the right tailor for
                    every occasion.
                </p>

            </div>


            <div className="services-grid">

                <div className="service-card">

                    <span className="service-number">
                        01
                    </span>

                    <h3>
                        Custom Tailoring
                    </h3>

                    <p>
                        Create clothing designed specifically
                        around your measurements, style and
                        personality.
                    </p>

                    <span className="service-arrow">
                        →
                    </span>

                </div>


                <div className="service-card">

                    <span className="service-number">
                        02
                    </span>

                    <h3>
                        Bridal & Occasion
                    </h3>

                    <p>
                        Find experienced tailors for bridal
                        dresses, sarees, suits and special
                        occasion outfits.
                    </p>

                    <span className="service-arrow">
                        →
                    </span>

                </div>


                <div className="service-card">

                    <span className="service-number">
                        03
                    </span>

                    <h3>
                        Alterations
                    </h3>

                    <p>
                        Get professional alterations to make
                        your favourite clothes fit perfectly.
                    </p>

                    <span className="service-arrow">
                        →
                    </span>

                </div>


                <div className="service-card">

                    <span className="service-number">
                        04
                    </span>

                    <h3>
                        Repairs & Restyling
                    </h3>

                    <p>
                        Refresh your existing wardrobe with
                        professional repairs and creative
                        restyling.
                    </p>

                    <span className="service-arrow">
                        →
                    </span>

                </div>

            </div>

        </section>
    );
};

export default Services;