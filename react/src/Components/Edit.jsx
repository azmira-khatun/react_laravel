import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    address: "",
  });

  const fetchProfile = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/profiles/${id}`);
    setUserField(result.data);
  };

  useEffect(() => {
    fetchProfile();
  }, [id]);

  const changeUserFieldHandler = (e) => {
    setUserField({ ...userField, [e.target.name]: e.target.value });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    await axios.put(`http://127.0.0.1:8000/api/profiles/${id}`, userField);
    navigate("/");
  };

  return (
    <div className="container">
      <h3>Edit Profile</h3>
      <form onSubmit={onSubmitChange}>
        <div className="mb-3 mt-3">
          <label>Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={userField.name}
            onChange={changeUserFieldHandler}
            required
          />
        </div>
        <div className="mb-3 mt-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={userField.email}
            onChange={changeUserFieldHandler}
            required
          />
        </div>
        <div className="mb-3 mt-3">
          <label>Address:</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={userField.address}
            onChange={changeUserFieldHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
