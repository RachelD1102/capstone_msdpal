import React,{ useState } from "react";
import './PostCard.css'
import axios from "axios";

export default function SubmitComment(props) {

    const [contents, setContents] = useState("");

    const onSubmitComment = async (event) => {
        event.preventDefault();
        await axios
          .post(`/api/comments/${props.postId}`, {
            contents: contents
          })
          .then(function (response) {
            console.log(response);
            //setSuccess(true);
          })
          .catch(function (error) {
            console.log(error.response.data);
          });
    };

  return (
    <div>
      <textarea
        className="cmt-text-box"
        type="text"
        placeholder="Leave your comment"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button 
      onClick={onSubmitComment}
      type="submit" 
      className="cmt-btn">
        Comment
      </button>
    </div>
  );
}
