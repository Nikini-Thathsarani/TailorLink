import React from "react";
import "./TailorCard.css";


const TailorCard = ({image, name, location, rating}) => {

    return (

        <div className="tailor-card">

            <img 
                src={image}
                alt={name}
            />

            <div className="tailor-info">

                <h3>{name}</h3>

                <p>{location}</p>

                <span>
                    ⭐ {rating}
                </span>

            </div>

        </div>

    );

};


export default TailorCard;