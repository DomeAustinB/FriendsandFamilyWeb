import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function App() {
  const handleInstagramClick = () => {
    window.location.href = "https://www.instagram.com/friendsandfamily.nyc/";
  };

  return (
    <div className="body">
      <div className="icon-container">
        <button className="icon" onClick={handleInstagramClick}>
          <FontAwesomeIcon icon={faInstagram} className="fa-3x"/>
        </button>
      </div>
    </div>
  );
}

export default App;




