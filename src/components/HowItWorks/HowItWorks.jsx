import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
    return (
        <section className="how-it-works">

            <div className="how-heading">

                <p className="section-label">
                    HOW IT WORKS
                </p>

                <h2>
                    From Idea to Perfect Fit
                </h2>

                <p>
                    Finding the right tailor is simple.
                    Discover, connect and create your perfect outfit.
                </p>

            </div>


            <div className="steps-container">

                <div className="step">

                    <div className="step-number">
                        01
                    </div>

                    <div className="step-content">

                        <h3>
                            Discover
                        </h3>

                        <p>
                            Search for skilled tailors in your area
                            based on location, services and ratings.
                        </p>

                    </div>

                </div>


                <div className="step">

                    <div className="step-number">
                        02
                    </div>

                    <div className="step-content">

                        <h3>
                            Connect
                        </h3>

                        <p>
                            View tailor profiles, explore their work
                            and communicate your requirements directly.
                        </p>

                    </div>

                </div>


                <div className="step">

                    <div className="step-number">
                        03
                    </div>

                    <div className="step-content">

                        <h3>
                            Customize
                        </h3>

                        <p>
                            Discuss your measurements, design,
                            fabric and other details with your tailor.
                        </p>

                    </div>

                </div>


                <div className="step">

                    <div className="step-number">
                        04
                    </div>

                    <div className="step-content">

                        <h3>
                            Create
                        </h3>

                        <p>
                            Your tailor brings your idea to life
                            and creates an outfit made just for you.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;