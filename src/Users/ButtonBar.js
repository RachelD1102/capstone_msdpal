import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { ButtonGroup,ButtonToolbar} from "react-bootstrap";
import "./ButtonBar.css"


export default function ButtonBar() {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="mr-2" aria-label="First group">
        <button className="btn-1">Recruitment</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <button className="btn-2">Internship</button>
      </ButtonGroup >
      <ButtonGroup className="mr-2">
        <button className="btn-3">Techinical Resources</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <button className="btn-4">MSD Activity</button>
      </ButtonGroup>
      <ButtonGroup className="mr-2">
        <button className="btn-5">Daily Life</button>
      </ButtonGroup>
    </ButtonToolbar>
  );
}
