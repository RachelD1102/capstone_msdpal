import React from "react";
import "./CommentPart.css";

export default function CommentPart(props) {
  function formatDate(date) {
    var d = new Date(date);
    d = d.toLocaleString();
    return d;
  }

  return (
    <div className="Comment">
      <div className="UserInfo-name">
        <span className="cmt-author">{props.cmt_author}</span> :{" "}
        <span className="cmt-contents">{props.cmt_contents}</span>
      </div>
      <div className="cmt-date">{formatDate(props.cmt_date)}</div>
    </div>
  );
}
