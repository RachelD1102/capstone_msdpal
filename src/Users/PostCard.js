import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import CommentPart from "./CommentPart";

import "./PostCard.css";
import axios from "axios";

export default function PostCard(props) {
  //let user_avatar = sessionStorage.getItem("avatar");
  function formatDate(date) {
    var d = new Date(date);
    d = d.toLocaleString();
    return d;
  }

  const [cmts, setCmts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/query/comments/${props.postId}`, {})
      .then(function (response) {
        console.log(response);
        setCmts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmitComment = async (event) => {
    event.preventDefault();
    await axios
      .post(`/api/comments/${props.id}`, {
        contents: contents,
      })
      .then(function (response) {
        console.log(response);
        window.location.reload();
        //setSuccess(true);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const [contents, setContents] = useState("");

  let imagePlaceholder = null;
  if (props.img) {
    imagePlaceholder = <img className="post-img" src={props.img} alt="" />;
  }

  return (
    <Card className="post-card">
      <Card.Header>
        {/* <span>{user_avatar}</span><img className="avatar-img" src={user.avatar} /> */}
        <Link className="card-username">{props.username}</Link>
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-contents">{props.contents}</Card.Text>
        <div className="img-part">{imagePlaceholder}</div>
        <p className="date-p">{formatDate(props.date)}</p>

        <div className="Comment">
          {cmts.map((c) => (
            <CommentPart
              cmt_author={c.author}
              cmt_contents={c.contents}
              cmt_date={c.date}
            />
          ))}
        </div>

        <div className="cmt-submit-box">
          <textarea
            className="cmt-text-box"
            type="text"
            placeholder="Leave your comment"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
          <button onClick={onSubmitComment} type="submit" className="cmt-btn">
            Comment
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}
