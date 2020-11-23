import React, { useState, useEffect } from "react";
import UserNavbar from "../UserNavbar";
import axios from "axios";
import PostCard from "../PostCard";
import { Redirect } from "react-router-dom";
import "../PostCard.css"

export default function MyPostsPage() {
  let author_Id = sessionStorage.getItem("userId");
  // const [user, setUser] = useState({
  //   id: "",
  //   username: "",
  //   email: "",
  //   firstName: "",
  //   lastName: "",
  //   uid: "",
  //   gradYear: "",
  //   placement: "",
  //   intro: "", 
  //   code: "",
  //   password: "",
  // });

  // const [id, setId] = useState("");
  // const [username, setUsername] = useState("");
  const [isManage, setManage] = useState(false);
  const [posts, setPosts] = useState([]);


  const onManageSection = () => {
    setManage(true);
  }

  
  useEffect(() => {
    axios
      .get(`/api/query/posts/authorId/${author_Id}`, {})//return promise object (success fail)
      // .then(function (response) {//instance method -> callback response is the value
      //   console.log(response);
      //   const currentuser = response.data;
      //   console.log(currentuser);

      //   setUser(currentuser);
      //   setId(currentuser.id);
      //   setUsername(currentuser.username);
      //   console.log(currentuser.id);
      //   console.log(currentuser.username);

      //   return axios.get(`/api/query/posts/authorId/${currentuser.id}`, {})
        
      // })
      .then(function (result) {
        setPosts(result.data);
        console.log(result);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //console.log(user);
  if(isManage) return <Redirect to="user-myposts-manage" />

  return (
    <>
      <UserNavbar />
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
      <div>
        <button
        type="button"
        onClick={onManageSection}
        className="btn-manageposts">
          Manage My Posts
        </button>
      </div>
    </>
  );
}
