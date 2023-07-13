import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    
    const { productList, setProductList} = props;

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
                
            })
            .catch((err) => console.log(err));
    }, []); 

    return (
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index) => (
                    <div className="link" key={index}>
                        {/* This is where :id in our app.js path gets its value... We can access this info via props */}
                        {/* Note: when styling, the DOM read "Link" as an a tag */}
                        <Link to={`/product/${product._id}`}>
                            {product.title}
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAll;