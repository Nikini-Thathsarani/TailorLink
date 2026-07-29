import React from "react";
import TailorCard from "../ui/TailorCard";
import "./FeaturedTailors.css";


const FeaturedTailors = () => {


const tailors = [

{
name:"Ayesha Bridal Studio",
location:"Colombo",
rating:"4.9",
image:"https://images.unsplash.com/photo-1556740749-887f6717d7e4"
},


{
name:"Royal Stitch",
location:"Kandy",
rating:"4.8",
image:"https://images.unsplash.com/photo-1525507119028-ed4c629a60a3"
},


{
name:"Elegant Fashion",
location:"Galle",
rating:"5.0",
image:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
}

];


return (

<section className="featured">


<p className="section-label">
FEATURED TAILORS
</p>


<h2>
Meet Our Skilled Creators
</h2>


<div className="tailor-container">


{
tailors.map((tailor,index)=>(

<TailorCard
key={index}
{...tailor}
/>

))
}


</div>


</section>

);


};


export default FeaturedTailors;