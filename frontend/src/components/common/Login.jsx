// Login.jsx
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./FooterC";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/Login", user);
      toast.success("✅ Successfully logged in!");
      localStorage.setItem("user", JSON.stringify(res.data));
      const { userType } = res.data;
      switch (userType) {
        case "Admin":
          navigate("/AdminHome");
          break;
        case "Ordinary":
          navigate("/HomePage");
          break;
        case "Agent":
          navigate("/AgentHome");
          break;
        default:
          navigate("/Login");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error("🚫 Invalid credentials");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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

      <section className="vh-100 d-flex align-items-start justify-content-center bg-dark text-white pt-5">
        <div className="glass-card p-5 rounded-4 shadow-lg mt-5">
          <h2 className="fw-bold text-center mb-4">Login</h2>
          <p className="text-center mb-4 text-white">
            Register your complaints easily!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-4">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control bg-dark text-white border-secondary"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control bg-dark text-white border-secondary"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
                required
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
            </div>

            <button
              className="btn btn-outline-light w-100 mb-3"
              type="submit"
              disabled={loading}
            >
              {loading ? <ClipLoader size={20} color="#ffffff" /> : "Login"}
            </button>
          </form>

          <p className="text-center text-white mb-0">
            Don't have an account?{" "}
            <Link to="/signup" className="text-info">
              Sign Up
            </Link>
          </p>
        </div>
      </section>

      <Footer />

      {/* Styling tweaks */}
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          max-width: 400px;
          width: 100%;
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

export default Login;
