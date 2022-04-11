import React, { useState, useEffect } from "react";
import axios from "axios";
import loader from "../../assets/loader.gif";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  // when the component mounts we need to get the data from fakestore API
  const getProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <div className="container py-3">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-3">
                <Link to={`/products/${product.id}`}>
                  <div className="card my-2 text-dark">
                    <img
                      src={product.image}
                      alt=""
                      className="card-img-top img-fluid p-2"
                    />
                    <div className="card-body">
                      <span className="card-text">{product.category}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <img src={loader} alt="loader" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
