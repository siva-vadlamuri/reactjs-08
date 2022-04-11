import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});

  const getProductDetailData = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    setProductDetail(data);
  };
  useEffect(() => {
    getProductDetailData();
  }, []);
  return <div>Product Detail page</div>;
}

export default Product;
