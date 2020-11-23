import React, { useState, useEffect } from "react";
import PostCard from "../PostCard";
import UserNavbar from "../UserNavbar";
import ButtonBar from "../ButtonBar";
import axios from "axios";

export default function UserMainpage() {
  //GET /api/query/posts/latest/:num
  //[{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/query/posts/latest/100", {})
      .then(function (response) {
        console.log(response);
        //post_data = response.data;
        //console.log(post_data);
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <UserNavbar />
      <div>
        <ButtonBar />
      </div>
      <div>
        {posts.map((post) => (
          <PostCard
            postId={post.id}
            id={post.id}
            username={post.author}
            title={post.title}
            contents={post.contents}
            date={post.date}
            img={post.img}
          />
        ))}
      </div>
    </>
  );
}
