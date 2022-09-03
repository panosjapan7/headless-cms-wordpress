import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "../styles/Post.css"

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  console.log(`${process.env.REACT_APP_API_URL}/posts/${id}`)

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`);
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="post">
      <p className="single-post">Post id: {post.ID ? post.ID : `  ${id} doesnt exist`}</p>

      {post.title && <h1 className="single-post">{parse(post.title)}</h1>}
      {post.content && <div className="single-post">{parse(post.content)}</div>}
    </div>
  );
}

export default Post;
