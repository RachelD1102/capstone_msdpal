import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ButtonGroup,ButtonToolbar} from "react-bootstrap";
import "./ButtonBar.css"
import axios from "axios";
import { Redirect } from "react-router-dom";


export default function ButtonBar() {

  const [isRecuritment, setRecruitmemt] = useState(false);
  const [isIntern, setIntern] = useState(false);
  const [isDaily, setDaily] = useState(false);
  const [isTech, setTech] = useState(false);
  const [isMSD, setMSD] = useState(false);


  const onRecruitment = () => {
    setRecruitmemt(true);
  };

  const onInternship = async (event) => {
    event.preventDefault();
    await axios
      .get("/api/query/posts/category/Internship", {})
      .then(function (response) {
        console.log(response);
        setIntern(true);
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
        setTech(true);
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
        setDaily(true);
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
        setMSD(true);
        //Response: [{ id, title, contents, category, *img, author, authorId, authorEmail,date }]
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  if(isRecuritment) return <Redirect to="user-mainpage-recruitment" />
  if(isIntern) return <Redirect to="user-mainpage-internship" />
  if(isDaily) return <Redirect to="user-mainpage-dailylife" />
  if(isMSD) return <Redirect to="user-mainpage-msdActivity" />
  if(isTech) return <Redirect to="user-mainpage-technicalresources" />

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
