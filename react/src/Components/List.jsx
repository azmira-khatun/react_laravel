import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    const result = await axios.get("http://127.0.0.1:8000/api/profiles");
    setProfiles(result.data);
  };

  const deleteProfile = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await axios.delete(`http://127.0.0.1:8000/api/profiles/${id}`);
      fetchProfiles();
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div>
      <h3>Profile List</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.address}</td>
              <td>
                <Link
                  className="btn btn-sm btn-primary me-2"
                  to={`/edit/${p.id}`}
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteProfile(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
