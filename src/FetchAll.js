import React, { useEffect, useState } from "react";
import "./FetchAll.css";
import { useNavigate } from "react-router-dom";

const FetchAll = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
  const getSinglePost=(id)=>{
    navigate(`/singlePost/${id}`)
  };
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
        <div className="row">
      {products.map((product, id) => {
        return (
          <div className="back col-sm-4 col-lg-4 w-30 " key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <button className="butt" onClick={()=>{getSinglePost(product.id)}}>View Details</button>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default FetchAll;
