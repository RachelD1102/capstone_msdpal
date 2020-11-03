import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import SubmitComment from "./SubmitComment";
import CommentPart from "./CommentPart";
import "./PostCard.css";


export default function PostCard(props) {

  return (
    <Card className="post-card">
      <Card.Header>
        <Link>
        {props.username}
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div>
        <SubmitComment />
        </div>
        <div>
        <CommentPart />
        </div>
        

      </Card.Body>
    </Card>
  );
}
