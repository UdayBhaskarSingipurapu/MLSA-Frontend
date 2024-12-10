import React from "react";
import {useForm} from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function Signup() {
  let {handleSubmit,register,formState:{errors}} = useForm()
  let navigate = useNavigate()
  let signup = (data) => {
    axios.post("http://localhost:3000/users", data).then((res) => {
      navigate("/login")
    })
  }
  return (
    <div
      className="card mx-auto mt-5 p-4 shadow"
      style={{
        maxWidth: "500px",
        borderRadius: "10px",
        borderColor: "#ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div className="card-body">
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          <u>Sign Up</u>
        </h3>
        <form onSubmit={handleSubmit(signup)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={{ fontWeight: "bold" }}>
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{ fontWeight: "bold" }}>
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="rollno" className="form-label" style={{ fontWeight: "bold" }}>
              Roll Number
            </label>
            <input
              type="text"
              className="form-control"
              id="rollno"
              placeholder="Enter your roll number"
              {...register("rollno", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label" style={{ fontWeight: "bold" }}>
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{ fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="retypePassword" className="form-label" style={{ fontWeight: "bold" }}>
              Retype Password
            </label>
            <input
              type="password"
              className="form-control"
              id="retypePassword"
              placeholder="Retype your password"
              {...register("retypePassword", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-1" style={{ color: "#555" }}>
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
