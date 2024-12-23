import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import { Link } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons/faStackOverflow';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

function Myworks() {
  return (
    <>
      <Header />
      
      <div className="p-5 homediv" style={{ minHeight: '95vh' }}>
       
        <Row className="g-4">
        <h1 className='fw-bolder text-danger'><FontAwesomeIcon icon={faStackOverflow} className='me-3'/>My Projects</h1>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>Netflix - Clone Project</Card.Title>
                <Card.Text>
                  A Netflix clone showcasing popular shows and movies using React.
                </Card.Text>
                <Link to="https://github.com/nissamohammed/netflixproject">
                  <Button variant="primary" className="rounded-5">
                    <FontAwesomeIcon icon={faGithub} className="me-2" />GitHub Link
                  </Button>
                </Link>
                <Link to="https://github.com/nissamohammed/netflixproject">
                <Button variant="success" className="rounded-5 ms-4">
                <FontAwesomeIcon icon={faLink}className="me-2" />Live Link
                  </Button>
                  </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>Superhero Grievance Website</Card.Title>
                <Card.Text>
                  A platform for managing superhero grievances using modern web tools.
                </Card.Text>
                <Link to="https://github.com/nissamohammed/frontside-superheroadmindashboard">
                  <Button variant="primary" className="rounded-5">
                    <FontAwesomeIcon icon={faGithub} className="me-2" /> Go GitHub
                  </Button>
                </Link>
                <Link to="https://frontside-superherogrievancesubmission.vercel.app/">
                <Button variant="success" className="rounded-5 ms-4">
                <FontAwesomeIcon icon={faLink}className="me-2" />Live Link
                  </Button>
                  </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>Employee Website</Card.Title>
                <Card.Text>
                  A project for managing employee data with a user-friendly interface.
                </Card.Text>
                <Link to="https://github.com/nissamohammed/Employeelistwebsite">
                  <Button variant="primary" className="rounded-5">
                    <FontAwesomeIcon icon={faGithub} className="me-2" /> Go GitHub
                  </Button>
                </Link>
                <Link to="https://employeelistwebsite.vercel.app/">
               
                <Button variant="success" className="rounded-5 ms-4">
                <FontAwesomeIcon icon={faLink}className="me-2" />Live Link
                  </Button>
                  </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>BurgerShop Website</Card.Title>
                <Card.Text>
                  A project for managing employee data with a user-friendly interface.
                </Card.Text>
                <Link to="https://github.com/nissamohammed/Burgershopsamplewebsite">
                  <Button variant="primary" className="rounded-5">
                    <FontAwesomeIcon icon={faGithub} className="me-2" /> Go GitHub
                  </Button>
                </Link>
                <Link to="https://burgershopsamplewebsite.vercel.app/">
                <Button variant="success" className="rounded-5 ms-4">
                <FontAwesomeIcon icon={faLink}className="me-2" />Live Link
                  </Button>
                  </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Myworks;
