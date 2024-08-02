import React from 'react';

const Schedule = () => {
  return (
    <div className="container mt-4">
      <header className="bg-dark text-white text-center py-5">
        <h1>Set Schedule</h1>
      </header>
      <section id="schedule-section">
        <h2>Set your availability</h2>
        <form action="/match">
          <div className="form-group">
            <label htmlFor="availability">Select your available times:</label>
            <textarea id="availability" name="availability" rows="10" className="form-control" placeholder="Enter your available times here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Continue</button>
        </form>
        <div className="image-container">
          <img src="/images/userschedule.png" alt="User schedule" className="img-fluid" />
          <div className="image-caption">User Schedule</div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;
