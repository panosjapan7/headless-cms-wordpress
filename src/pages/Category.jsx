import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/Category.css";

const Category = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts?category=${category}`
    );
    const data = await response.json();
    setPosts(data.posts);
    console.log("setPosts: ", data.posts);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [category]);

  return (
    <div>
      <p className="category-name">{category}</p>
      <div className="posts-list">
        {posts &&
          posts.map((post, index) => {
            return (
              <Link to={`/posts/${post.ID}`} key={index}>
                <p className="post-title">{post.title}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
