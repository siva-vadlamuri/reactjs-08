import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../../assets/loader.gif";
import { addToCart } from "../../redux/ProductActions/ProductActions";

function Product() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  // how can i check productDetail object has the data
  const getProductDetailData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    setProductDetail(data);
  };
  useEffect(() => {
    getProductDetailData();
  }, []);
  return (
    <div className="container">
      {Object.keys(productDetail).length > 0 ? (
        <div className="row border border-primary mt-2">
          <div className="col-md-6 p-5">
            <img
              src={productDetail.image}
              alt="product"
              className="img-fluid p-5"
            />
          </div>
          <div className="col-md-6 border-start border-primary">
            <div className="mt-2">
              <h3 className="p-2">{productDetail.title}</h3>
              <div>
                <span className="bg-info text-light p-1">
                  Price: $ {productDetail.price}
                </span>
              </div>
              <div className="mt-3">
                <div className="bg-secondary text-light p-2">
                  Category : {productDetail.category}
                </div>
              </div>
              <div className="mt-2">
                <p>{productDetail.description}</p>
              </div>
              <div className="product__addToCart mt-3">
                <button
                  onClick={() => {
                    addToCart(productDetail);
                  }}
                  className="btn btn-info px-3 py-2"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src={loader} alt="loader" />
        </div>
      )}
    </div>
  );
}

export default Product;
