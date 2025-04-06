import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image2 from "../../Images/Image2.png";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Footer from "./FooterC";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>OCRMS</Navbar.Brand>
          <ul className="navbar-nav d-flex flex-row gap-4 mb-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-light">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Login
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-center text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h1 className="display-5 fw-bold mb-3">
                Streamline Your Workflow,
              </h1>
              <p className="lead">
                Elevate customer satisfaction with our online complaint
                management platform.
              </p>
              <Link to="/login">
                <Button className="btn btn-info btn-lg mt-3 px-4 shadow">
                  Submit a Complaint
                </Button>
              </Link>
            </div>
            <div className="col-md-6 text-center">
              <img
                src={Image2}
                alt="Complaint Management"
                className="img-fluid rounded-4 shadow home-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="section bg-dark text-white py-5">
        <Container>
          <h2 className="text-center mb-4">How Complaint Registration Works</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="step-card p-4 h-100 rounded-3 bg-secondary bg-opacity-10 border">
                <h4>1. Sign Up / Login</h4>
                <p>
                  Create an account or log in to get started with your
                  complaint.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="step-card p-4 h-100 rounded-3 bg-secondary bg-opacity-10 border">
                <h4>2. Submit Your Complaint</h4>
                <p>
                  Provide the necessary details through our simple online form.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="step-card p-4 h-100 rounded-3 bg-secondary bg-opacity-10 border">
                <h4>3. Track Progress</h4>
                <p>
                  Stay updated on the status of your complaint in real-time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Why Choose Us */}
      <div className="section bg-black text-white py-5">
        <Container>
          <h2 className="text-center mb-4">Why Use OCRMS?</h2>
          <ul className="list-unstyled text-center fs-5">
            <li className="mb-2">✔ Easy to use, mobile-friendly interface</li>
            <li className="mb-2">✔ Quick submission and response times</li>
            <li className="mb-2">✔ Transparent progress tracking</li>
            <li className="mb-2">✔ Secure and reliable complaint database</li>
          </ul>
        </Container>
      </div>

      <Footer />

      {/* <style>{`
        .hero-section {
          background: linear-gradient(to right, #0f0f0f, #1f1f1f);
          min-height: 100vh;
        }

        .step-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .btn-info {
          background-color: #0dcaf0;
          border-color: #0dcaf0;
        }

        .btn-info:hover {
          background-color: #31d2f2;
          border-color: #31d2f2;
        }

        .home-image {
          max-height: 350px;
          width: auto;
          object-fit: contain;
        }
      `}</style> */}
    </>
  );
};

export default Home;
