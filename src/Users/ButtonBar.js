import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ButtonGroup,ButtonToolbar} from "react-bootstrap";
import "./ButtonBar.css"
import axios from "axios";


export default function ButtonBar() {

  const onRecruitment = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/Recruitment", {})
      .then(function (response) {
        console.log(response);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const onInternship = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/Internship", {})
      .then(function (response) {
        console.log(response);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const onTechnical = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/TechnicalResources", {})
      .then(function (response) {
        console.log(response);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const onDaily = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/DailyLife", {})
      .then(function (response) {
        console.log(response);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const onMSDActivity = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/MSDActivity", {})
      .then(function (response) {
        console.log(response);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };


  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        <button 
        className="btn-1"
        type="button"
        onClick={onRecruitment}
        >Recruitment</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <button 
        className="btn-2"
        type="button"
        onClick={onInternship}
        >Internship</button>
      </ButtonGroup >
      <ButtonGroup className="mr-2">
        <button 
        className="btn-3"
        type="button"
        onClick={onTechnical}
        >Technical Resources</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <button 
        className="btn-4"
        type="button"
        onClick={onMSDActivity}
        >MSD Activity</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <button 
        className="btn-5"
        type="button"
        onClick={onDaily}
        >Daily Life</button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
