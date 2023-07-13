import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {
    const { productList, setProductList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/products", {
                title,
                price,
                description,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="center">
            <h1>Product Manager</h1>

            <form onSubmit={submitHandler}>
                <div className="inputbox">
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                        required="required"
                    />
                    <span>Title</span>
                </div>
                <div className="inputbox">
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                        required="required"
                    />
                    <span>Price</span>
                </div>
                <div className="inputbox">
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="description"
                        type="text"
                        required="required"
                    />
                    <span>Description</span>
                </div>
                <div className="inputbox">
                    <input type="submit" value="Create" />
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;