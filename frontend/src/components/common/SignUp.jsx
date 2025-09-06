import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./FooterC";

const SignUp = () => {
  const [title, setTitle] = useState("Select User");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    userType: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleTitle = (select) => {
    setTitle(select);
    setUser({ ...user, userType: select });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, userType: title };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/SignUp`,
        updatedUser
      );
      alert("Registration successful");
      JSON.stringify(res.data.user);
    } catch (err) {
      console.error(err);
    }

    setUser({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: "",
    });
    setTitle("Select User");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>OCRMS</Navbar.Brand>
          <ul className="navbar-nav d-flex flex-row gap-4">
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

      <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div
          className="glass-card p-5 rounded-4 shadow-lg"
          style={{ maxWidth: "500px", width: "100%" }}
        >
          <h2 className="fw-bold text-center mb-3">Create an Account</h2>
          <p className="text-white text-center mb-4">
            Enter your details to register a complaint
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Full Name"
                required
              />
              <label>Full Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Email"
                required
              />
              <label>Email</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Password"
                required
              />
              <label>Password</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="form-control bg-dark text-white border-secondary"
                placeholder="Mobile Number"
                required
              />
              <label>Mobile Number</label>
            </div>
            <div className="mb-4">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" className="w-100">
                  {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleTitle("Ordinary")}>
                    Ordinary
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleTitle("Admin")}>
                    Admin
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleTitle("Agent")}>
                    Agent
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <button className="btn btn-outline-light w-100 mt-2" type="submit">
              Register
            </button>
          </form>
        </div>
      </section>

      <Footer />
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .form-floating > .form-control:focus {
          border-color: #0dcaf0;
          box-shadow: 0 0 0 0.2rem rgba(13, 202, 240, 0.25);
        }
        .form-floating > label {
          color: #ccc;
        }
        .form-floating > .form-control {
          background-color: #222 !important;
        }
      `}</style>
    </>
  );
};

export default SignUp;
