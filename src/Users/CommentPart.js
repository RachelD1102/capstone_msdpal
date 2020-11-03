import React from "react";

export default function CommentPart(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          //   src={props.author.avatarUrl}
          //alt={props.author.name}
        />
        <div className="UserInfo-name">{props.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{(props.date)}</div>
    </div>
  );
}
