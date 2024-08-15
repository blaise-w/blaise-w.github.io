import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/users/add', {
        firstName,
        lastName,
        availability: [], // Initially empty; will be set in Schedule page
      });
      console.log('User created:', response.data);
      window.location.href = '/schedule';
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mt-4">
      <header className="bg-dark text-white text-center py-5">
        <h1>Edit Profile</h1>
      </header>
      <section id="edit-profile-section">
        <h2>Enter your name</h2>
        <p>Your first name will be visible to all users</p>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
          <button type="submit" className="btn btn-primary">Continue</button>
        </form>
      </section>
    </div>
  );
};

export default Profile;
