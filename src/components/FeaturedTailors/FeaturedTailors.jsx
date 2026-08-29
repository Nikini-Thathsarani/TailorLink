import React from "react";
import "./FeaturedTailors.css";

const FeaturedTailors = () => {
    return (
        <section className="featured-tailors">

            <div className="featured-heading">

                <p className="section-label">
                    FEATURED TAILORS
                </p>

                <h2>
                    Meet Our Skilled Tailors
                </h2>

                <p className="section-description">
                    Discover talented tailors who can bring your
                    ideas and personal style to life.
                </p>

            </div>


            <div className="tailor-grid">

                <div className="tailor-card">

                    <div className="tailor-image">
                        <div className="image-placeholder">
                            Tailor
                        </div>
                    </div>

                    <div className="tailor-details">

                        <h3>
                            Ayesha Studio
                        </h3>

                        <p>
                            Colombo
                        </p>

                        <span className="rating">
                            ★ 4.9
                        </span>

                    </div>

                </div>


                <div className="tailor-card">

                    <div className="tailor-image">
                        <div className="image-placeholder">
                            Tailor
                        </div>
                    </div>

                    <div className="tailor-details">

                        <h3>
                            Royal Stitch
                        </h3>

                        <p>
                            Kandy
                        </p>

                        <span className="rating">
                            ★ 4.8
                        </span>

                    </div>

                </div>


                <div className="tailor-card">

                    <div className="tailor-image">
                        <div className="image-placeholder">
                            Tailor
                        </div>
                    </div>

                    <div className="tailor-details">

                        <h3>
                            Elegant Threads
                        </h3>

                        <p>
                            Galle
                        </p>

                        <span className="rating">
                            ★ 5.0
                        </span>

                    </div>

                </div>

            </div>


            <div className="featured-action">

                <button>
                    View All Tailors →
                </button>

            </div>

        </section>
    );
};

export default FeaturedTailors;