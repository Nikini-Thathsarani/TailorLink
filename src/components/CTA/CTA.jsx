import React from "react";
import "./CTA.css";

const CTA = () => {
    return (
        <section className="cta">

            <div className="cta-content">

                <p className="cta-label">
                    YOUR STYLE. YOUR TAILOR.
                </p>

                <h2>
                    Ready to Create<br />
                    Something Perfect?
                </h2>

                <p className="cta-description">
                    Find a skilled tailor near you and turn your
                    ideas into something uniquely yours.
                </p>

                <div className="cta-buttons">

                    <button className="cta-primary">
                        Find Your Tailor →
                    </button>

                    <button className="cta-secondary">
                        Become a Tailor
                    </button>

                </div>

            </div>

        </section>
    );
};

export default CTA;