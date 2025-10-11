import React from "react";
import { useState } from "react";
import { useContext } from "react";
import './Page1.css';
import Store from "./Store";
import { Link } from 'react-router-dom';
const Page1 = () => {
    const { AllData, setAllData } = useContext(Store);

    const [FormData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        image: null,
    });

    const userInput = (field, event) => {
        if (field === "image") {
            const file = event.target.files[0];
            if (file) {
                const imageURL = URL.createObjectURL(file);
                setFormData({
                    ...FormData,
                    image: imageURL,
                });
            }
        } else {
            setFormData({
                ...FormData,
                [field]: event.target.value,
            });
        }
    };




    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted!!");
        setAllData([...AllData, FormData]);
        setFormData({
            name: "",
            brand: "",
            price: "",
            image: null,
        })
    };

    const handleClear = () => {
        setFormData({
            name: "",
            brand: "",
            price: "",
            image: null,
        });
    };
    return <>
        {/* header */}
        <div className="header">
            <Link to="/View">
                <button className="view-data-btn">View Data</button>
            </Link>
        </div>
        <div className="body">
            {/* form - container */}
            <div className="form-fillup">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <div>
                            <label>Name:</label>
                            <input type="text" value={FormData.name} onChange={(event) => userInput("name", event)} />
                        </div>
                        <div>
                            <label>Brand:</label>
                            <input type="text" value={FormData.brand} onChange={(event) => userInput("brand", event)} />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input type="number" value={FormData.price} onChange={(event) => userInput("price", event)} />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input id="image-input" type="file" onChange={(event) => userInput("image", event)} />

                        </div>
                    </div>

                    <div className="form-operations">
                        <button type="submit" className="submit-btn">Submit</button>
                        <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>
        </div>

    </>
};
export default Page1;