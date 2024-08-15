import React, { useState } from 'react';
import './styles.css';

const Match = () => {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const users = [
    {
      name: 'Jane (she/her)',
      badges: ['Night owl', 'North campus', 'Comp Sci', 'Sophomore'],
      lookingFor: ['Project partner', 'Study group', 'Study partner'],
      scheduleImage: '/images/userschedule.png'
    },
    {
      name: 'John (he/him)',
      badges: ['Early bird', 'South campus', 'Mathematics', 'Junior'],
      lookingFor: ['Project partner', 'Study group'],
      scheduleImage: '/images/userschedule.png'
    },
    {
      name: 'Alice (she/her)',
      badges: ['Night owl', 'East campus', 'Biology', 'Senior'],
      lookingFor: ['Study partner', 'Study group'],
      scheduleImage: '/images/userschedule.png'
    }
  ];

  const showUser = (index) => {
    return (
      <div className="user-profile mb-4">
        <div className="image-container">
          <img src={users[index].scheduleImage} alt="User's schedule" className="img-fluid" />
          <div className="image-caption">User's schedule</div>
        </div>
        <h2>{users[index].name}</h2>
        <p>
          {users[index].badges.map(badge => (
            <span key={badge} className="badge badge-success">{badge}</span>
          ))}
        </p>
        <div className="looking-for mb-4">
          <p>Looking for...</p>
          <ul className="list-inline">
            {users[index].lookingFor.map(item => (
              <li key={item} className="list-inline-item">{item}</li>
            ))}
          </ul>
        </div>
        <div className="buttons">
          <button className="btn btn-success interested-button" onClick={nextUser}>Interested</button>
          <button className="btn btn-secondary next-button" onClick={nextUser}>Next</button>
        </div>
      </div>
    );
  };

  const nextUser = () => {
    setCurrentUserIndex((currentUserIndex + 1) % users.length);
  };

  return (
    <div className="container mt-4">
      <header className="bg-dark text-white text-center py-5">
        <h1>Study Partner Match</h1>
      </header>
      <section id="match-section">
        {showUser(currentUserIndex)}
      </section>
    </div>
  );
};

export default Match;
