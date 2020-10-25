import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./PostCard.css";

export default function PostCard() {
  return (
    <Card className="post-card">
      <Card.Header>
        <Link>
        Username
        </Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>Post Title</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <div>
        <textarea
        className="cmt-text-box"
        type="text"
        placeholder="Leave your comment"
        />
        <button
         type="submit"
         className="cmt-btn" 
        >
          Comment
        </button>
        </div>
        

      </Card.Body>
    </Card>
  );
}
