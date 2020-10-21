import React from "react";
import UserNavbar from "../UserNavbar";
import "./CreatePost.css";

export default function CreatePost() {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="create-post-container">
        <form className="create-post-form" >
          <h1 className="title">Create Your New Post Here!</h1>
          <div className="post-container">
            <label className="form-label">Title</label>
            <input
              className="post-title"
              type="text"
              //name="username"
              placeholder="Enter your post title here"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <div className="post-container">
            <label className="form-label">Content</label>
            <textarea
              className="post-inputs"
              type="text"
              //name="username"
              placeholder="Enter your content here"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <div className="post-container">
            <label className="form-label">Photo Url (Optional)</label>
            <input
              className="photo-url"
              type="text"
              //name="firstname"
              placeholder="Enter the photo Url"
              //value={firstName}
              //onChange={(e) => setFirstname(e.target.value)}
            />
            {/* {errors.firstname && <p>{errors.firstname}</p>} */}
          </div>
          <div className="post-container">
            <label className="form-label">Category</label>
            <input
              className="post-title"
              type="text"
              //name="username"
              placeholder="Enter the category"
              //value={username}
              //onChange={(e) => setUsername(e.target.value)}
            />
            {/* {errors.username && <p>{errors.username}</p>} */}
          </div>
          <button className="post-submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
