import React from "react";
import "./Hero.css";
import heroImage from "../../../assets/images/tailor-hero.png";


const Hero = () => {

    return (

        <section className="hero">


            <div className="hero-content">

                <p className="small-title">
                    PREMIUM TAILORING EXPERIENCE
                </p>


                <h1>
                    CUSTOM OUTFITS
                    <br />
                    THAT DEFINE
                    <br />
                    YOUR STYLE
                </h1>


                <p className="hero-description">
                    Connect with skilled tailors near you and create outfits
                    that match your style.
                </p>


                <div className="hero-buttons">

                    <button className="hero-btn">
                        FIND TAILORS →
                    </button>


                    <button className="outline-btn">
                        BECOME A TAILOR
                    </button>

                </div>


            </div>



            {/* Image Section */}
            <div className="hero-image">

                <img 
                    src={heroImage}
                    alt="Tailoring fashion"
                />

            </div>


        </section>

    );

};


export default Hero;