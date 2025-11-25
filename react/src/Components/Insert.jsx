import React, { useState } from "react";
import List from "./List";
import axios from "axios";

const Insert = () => {
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    address: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({ ...userField, [e.target.name]: e.target.value });
  };

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/profiles", userField);
      setUserField({ name: "", email: "", address: "" });
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Form Card */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Add New Profile</h4>
              <form onSubmit={onSubmitChange}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={userField.name}
                    onChange={changeUserFieldHandler}
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={userField.email}
                    onChange={changeUserFieldHandler}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={userField.address}
                    onChange={changeUserFieldHandler}
                    placeholder="Enter address"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Profile
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* List Card */}
        <div className="col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h4 className="card-title mb-4 text-center">Profiles List</h4>
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insert;
