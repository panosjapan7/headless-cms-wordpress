import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
    const data = await response.json();
    setPosts(data.posts);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      {posts &&
        posts.map((post) => {
          return (
            <div className="post" key={post.ID}>
              <h1 className="post-title">{post.title}</h1>
              <Link to={`/posts/${post.ID}`}>
                <p className="read-more">Read more..</p>
              </Link>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
