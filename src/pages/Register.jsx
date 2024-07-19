import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match!");
    }

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [user, isError, message]);

  if (isLoading) {
    return (
      <h1 className="display-1 my-5 text-center text-secondary">Loading...</h1>
    );
  }

  return (
    <div className="card p-3">
      <h1 className="my-2 text-center">Register Here</h1>
      <form className="my-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control my-2"
          required
          name="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="form-control my-2"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="form-control my-2"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="form-control my-2"
          required
          name="password2"
          value={password2}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
