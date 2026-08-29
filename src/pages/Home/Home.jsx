import React from "react";

import Hero from "../../components/ui/Hero/Hero";
import About from "../../components/ui/About/About";
import FeaturedTailors from "../../components/FeaturedTailors/FeaturedTailors";
import Services from "../../components/Services/Services";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import CTA from "../../components/CTA/CTA";




const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <FeaturedTailors />
                <Services />
                 <HowItWorks />
                 
        </>
    );

};

export default Home;