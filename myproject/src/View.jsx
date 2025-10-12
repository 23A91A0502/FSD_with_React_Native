import React, { useContext } from "react";
import "./View.css";
import Store from "./Store";
import { Link } from "react-router-dom";

const View = () => {
  const { AllData } = useContext(Store);

  return (
    <>
      <div className="header">
        <Link to="/">
          <button className="add-data-btn">Back to Add Data</button>
        </Link>
      </div>

      <div className="body2">
        <div className="parent">
          {AllData.length === 0 ? (
            <p>No data found. Please add something.</p>
          ) : (
            AllData.map((ele, index) => (
              <Link
                to={`/details/${index}`}
                key={index}
                style={{ textDecoration: "none" }}
              >
                <div className="child" key={index}>
                  <div className="Picture">
                    <img src={ele.image} alt={ele.name} className="product-img" />
                  </div>
                  <div className="details">
                    <div className="Brand"><h3>Brand : {ele.brand}</h3></div>
                    <div className="Price"><h3>Price : {ele.price}/-</h3></div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default View;
