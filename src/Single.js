import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./FetchAll.css";
const Single = () => {
  const [post, setPost] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  });

const homePage = () => {
  navigate("/");
};
return (
  <div>
    {post.map((single, id) => {
      return (
        <div className="back">
          <h4>{single.title}</h4>
          <p>{single.description}</p>
          <button className="butt" onClick={() => homePage()}>
            Back
          </button>
        </div>
      );
    })}
  </div>
)
}

export default Single;
