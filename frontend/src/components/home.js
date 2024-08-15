import React from 'react';
import '../styles.css';

const Home = () => {
  return (
    <div className="text-center">
      <header className="bg-dark text-white text-center py-5">
        <h1>Welcome to Study Buddies</h1>
      </header>
      <main className="container mt-4">
        <div className="text-center">
          <div className="image-container">
            <img src="/images/sblogo.png" alt="Study Buddies graduation cap logo" className="img-fluid" />
            <div className="image-caption">Study Buddies Logo</div>
          </div>
        </div>
        <section className="text-center">
          <h2>Welcome!</h2>
          <p>Welcome to Study Buddies, the platform to find study partners and form study groups easily. Click the button below to start.</p>
          <a href="/profile" className="btn btn-success mt-3">Get Started</a>
        </section>
      </main>
    </div>
  );
};

export default Home;
