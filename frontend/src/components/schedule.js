import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Calendar from './Calendar';
import '../styles.css';

const Schedule = ({ user, setUserAvailability }) => {
  const [availability, setAvailability] = useState(user ? user.availability : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserAvailability(availability); // Save availability to user's profile
    // No need to redirect here; navigation will be handled by the Link component
  };

  return (
    <div className="container mt-4">
      <header className="bg-dark text-white text-center py-5">
        <h1>Set Schedule</h1>
      </header>
      <section id="schedule-section">
        <h2>Set your availability</h2>
        <form onSubmit={handleSubmit}>
          <Calendar availability={availability} setAvailability={setAvailability} />
          <Link to="/match" className="btn btn-primary mt-3" onClick={handleSubmit}>
            Continue
          </Link>
        </form>
      </section>
    </div>
  );
};

export default Schedule;
