import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const data = await response.json();
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <p className="recent-posts">All Posts</p>
      {posts &&
        posts.map((post) => {
          return (
            <div className="post-container" key={post.ID}>
              <h1 className="post-title-home">{post.title}</h1>
              <p className="post-date">{post.date.split("T")[0]}</p>
              <Link to={`/posts/${post.ID}`}>
                <p className="read-more">Read more..</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
