import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostTable.css";

const PostTable = () => {
  const [posts, setPosts] = useState([]);
  const [alert, setAlert] = useState("");
  let author_Id = sessionStorage.getItem("userId");

  useEffect(() => {
    async function getPosts() {
      await axios
        .get(`/api/query/posts/authorId/${author_Id}`, {})
        .then(function (response) {
          console.log(response);
          setPosts(response.data);
          if (response.data.length === 0) {
            setAlert("You do not have any posts.");
          }
        })
        .catch((error) => console.log(error.response.data));
    }
    getPosts();
  }, []);

  // const onGetPosts = async (event) => {
  //   event.preventDefault();
  //   await axios
  //     .get(`/api/query/posts/authorId/${author_Id}`, {})
  //     .then(function (response) {
  //       console.log(response);
  //       setPosts(response.data);
  //       if (response.data.length === 0) {
  //         setAlert("You do not have any posts.");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error.response.data);
  //     });
  // };

  const removeData = (id) => {
    axios
      .delete(`/api/posts/${id}`, {})
      .then(function (response) {
        const del = posts.filter((posts) => id !== posts.id);
        setPosts(del);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const renderHeader = () => {
    let headerElement = [
      "Post Id",
      "Post Title",
      "Post Contents",
      "Category",
      "Img Url",
      "Author",
      "Date",
      "Operation",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return (
      posts &&
      posts.map(({ id, title, contents, category, img, author, date }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{contents}</td>
            <td>{category}</td>
            <td>{img}</td>
            <td>{author}</td>
            <td>{date}</td>
            <td className="opration">
              <button className="button" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <div className="table-container">
        <table id="News">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
      <div>
        {/* <button onClick={onGetPosts} type="button" className="get-posts-btn">
          Get my all Posts
        </button> */}
      </div>
      <h2 className="h2-alert">{alert}</h2>
    </>
  );
};

export default PostTable;
