import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "../styles/Post.css";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [postCategory, setPostCategory] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/posts/${id}`
    );
    const data = await response.json();
    setPost(data);

    // Saves the object that contains the category data into a var
    let obj = data.categories;
    setPostCategory(Object.keys(obj)[0]);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="post">
      <div className="post-id-category-container">
        <p className="single-post">
          Post id: {post.ID ? post.ID : `  ${id} doesnt exist`}
        </p>
        <p className="single-post">
          Post Category:{" "}
          {postCategory ? postCategory : `  ${postCategory} doesnt exist`}
        </p>
        <p className="single-post">
          Post Date:{" "}
          {post.date ? post.date.split("T")[0] : `  ${post.date} doesnt exist`}
        </p>
      </div>

      {post.title && <h1 className="single-post">{parse(post.title)}</h1>}
      <img className="featured-image" src={post.featured_image} alt="" />
      {post.content && <div className="single-post">{parse(post.content)}</div>}
    </div>
  );
}

export default Post;
