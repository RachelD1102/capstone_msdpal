import React, {useState, useEffect} from "react";
import PostCard from "./PostCard";
import axios from "axios";

export default function UserOwnPosts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/query/posts/author/${props.author}`, {})
      .then(function (response) {
        console.log(response);
        setPosts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
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
  );
}
