import React from "react";

import Hero from "../../components/ui/Hero/Hero";
import About from "../../components/ui/About/About";
import FeaturedTailors from "../../components/FeaturedTailors/FeaturedTailors";


const Home = () => {

    return (
        <>
            <Hero />
            <About />
            <FeaturedTailors />
        </>
    );

};

export default Home;