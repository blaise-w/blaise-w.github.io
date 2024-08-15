import React, { useState } from 'react';
import Calendar from './Calendar';
import '../styles.css';

const Schedule = ({ user, setUserAvailability }) => {
  const [availability, setAvailability] = useState(user ? user.availability : []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserAvailability(availability); // Save availability to user's profile
    window.location.href = '/match'; // Redirect to match page
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
          <button type="submit" className="btn btn-primary mt-3">Continue</button>
        </form>
      </section>
    </div>
  );
};

export default Schedule;
