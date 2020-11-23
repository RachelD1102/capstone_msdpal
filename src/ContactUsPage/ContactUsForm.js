import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './ContactUsForm.css'


export default function CoutactUsForm() {
  return (
    <div className="container">
    <Card className="aboutus-card">
      <Card.Img variant="top" src='img/img1.jpg' alt='MSD' />
      <Card.Body className="card-body">
        <Card.Title className="title">Contact Us</Card.Title>
        <Card.Text className="text">
        50 S.Central Campus Drive Rm 3190
        </Card.Text>
        <Card.Text className="text">
        Salt Lake City, UT 84112
        </Card.Text>
        <Card.Text className="text">
        (801) 581-8224
        </Card.Text>
        <Card.Text className="text">
         xuefeng.xu@utah.edu
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}