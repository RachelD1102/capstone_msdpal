import React, {useState} from "react";
import UserNavbar from "../UserNavbar";
import "./CreatePost.css";
import axios from "axios";

axios.defaults.withCredentials = true

export default function CreatePost() {
  const [postTitle, setPostTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [isSuccess, setSuccess] = useState(false);

  const onCreatePost = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/posts", {
        title: postTitle,
        contents: content,
        category: category,
        img: url,
      })
      .then(function (response) {
        console.log(response);
        setSuccess(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  if (isSuccess)
    return (
      <>
        <div>
          <UserNavbar />
        </div>
        <div className="create-post-container">
          <form className="create-post-form">
            <h1 className="title">Your post has been submitted successfully!</h1>
          </form>
        </div>
      </>
    );

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="create-post-container">
        <form className="create-post-form">
          <h1 className="title">Create Your New Post Here!</h1>
          <div className="post-container">
            <label className="form-label">Title</label>
            <input
              className="post-title"
              type="text"
              placeholder="Enter your post title here"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
          </div>
          <div className="post-container">
            <label className="form-label">Content</label>
            <textarea
              className="post-inputs"
              type="text"
              placeholder="Enter your content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="post-container">
            <label className="form-label">Photo Url (Optional)</label>
            <input
              className="photo-url"
              type="text"
              placeholder="Enter the photo Url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="post-container">
            <label className="form-label">Category</label>
            <input
              className="post-title"
              type="text"
              placeholder="Enter the category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <button
          onClick={onCreatePost}
          className="post-submit-btn" 
          type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
