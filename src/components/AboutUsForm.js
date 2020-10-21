import React from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './AboutUsForm.css'


export default function AboutUsForm() {
  return (
    <div className="container">
    <Card className="aboutus-card">
      <Card.Img variant="top" src='img/img1.jpg' alt='MSD' />
      <Card.Body className="card-body">
        <Card.Title className="title">About Us</Card.Title>
        <Card.Text className="text">
        The Master of Software Development (MSD) is a comprehensive and rigorous 16-month program producing capable coders, big data analysts, computer security experts and more for graduates looking to carve out a new career path. It's also the perfect next step for those who want to enhance their careers by learning software development.
        </Card.Text>
        <Card.Text className="text">
        With MSDPal, you can scan MSD news, find interested alumni, and send posts about recruitment, internship or everyday life. Our goal is to promote long-term interaction between MSD alumni, building our own network and sharing information in order to help each other.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

// class AboutUsForm extends Component {
//     render() {
//         return (
//             <div>
//             <Card style={{ width: "18rem" }}>
//               <Card.Img variant="top" src="holder.js/100px180" />
//               <Card.Body>
//                 <Card.Title>Card Title</Card.Title>
//                 <Card.Text>
//                   Some quick example text to build on the card title and make up the
//                   bulk of the card's content.
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//             </div>
//           );
//     }
//   }
  
//   export default AboutUsForm;
  
