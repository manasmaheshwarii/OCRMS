import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Complaint = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userComplaint, setUserComplaint] = useState({
    userId: user._id,
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    status: "",
    comment: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserComplaint({ ...userComplaint, [name]: value });
  };
  const handleClear = () => {
    setUserComplaint({
      userId: "",
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      status: "",
      comment: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const { _id } = user;
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/Complaint/${_id}`,
        userComplaint
      );
      toast.success("Complaint submitted successfully!");
      handleClear();
    } catch (err) {
      toast.error("Failed to submit complaint. Please try again.");
      console.error(err);
    }
  };
  return (
    <>
      <div className="text-white complaint-box">
        <form onSubmit={handleSubmit} className="compliant-form row bg-dark ">
          {/* Form fields here, omitted for brevity */}
        </form>
      </div>
    </>
  );
};

export default Complaint;
