import React from 'react';

function Login() {
  return (
    <div
      className="card mx-auto mt-5 p-4 shadow"
      style={{
        maxWidth: "400px",
        borderRadius: "10px",
        borderColor: "#ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div className="card-body">
        <h3 className="text-center mb-4" style={{ color: "#333" }}>
          <u>Login</u>
        </h3>
        <form>
          <div className="mb-3">
            <label htmlFor="roll" className="form-label" style={{ fontWeight: "bold" }}>
              Roll Number
            </label>
            <input
              type="text"
              name="roll"
              id="roll"
              className="form-control"
              placeholder="Enter your roll number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pass" className="form-label" style={{ fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              name="pass"
              id="pass"
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="mb-1" style={{ color: "#555" }}>
            Don't have an account?{" "}
            <a href="/signup" className="text-primary">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
