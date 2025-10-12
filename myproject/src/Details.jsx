import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Store from "./Store";
import './Details.css';

const Details = () => {
    const { AllData } = useContext(Store);
    const { id } = useParams();
    const item = AllData[id];

    if (!item) {
        return <h2>No item found.</h2>;
    }

    return (
        <>
            {/* Blurred background */}
            <div className="background-blur"></div>

            {/* Header */}
            <div className="header3">
                <Link to="/View">
                    <button className="add-data-btn3">Back to View Data</button>
                </Link>
            </div>

            {/* Content */}
            <div className="body3">
                <div className="child-of-details">
                    <div className="Picture">
                        <img src={item.image} alt={item.name} className="product-img" />
                    </div>
                    <div className="details-details">
                        <div className="Name"><h3>Name : {item.name}</h3></div>
                        <div className="Brand"><h3>Brand : {item.brand}</h3></div>
                        <div className="Price"><h3>Price : {item.price}/-</h3></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
