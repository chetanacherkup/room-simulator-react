import './App.css';
import sleeping from './Assets/sleeping.png';
import awake from './Assets/awake.png';
import React, { useState } from 'react';

function App() {
  // State to manage the current image and button active state
  const [currentImage, setCurrentImage] = useState(sleeping);
  const [isActive, setIsActive] = useState(false);

  // Function to handle button click and change image
  const handleClick = () => {
    setCurrentImage(currentImage === sleeping ? awake : sleeping);
    setIsActive(!isActive); // Toggle the active state
  };

  // Determine the button text based on the current image
  const buttonText = currentImage === sleeping ? 'Good Morning!' : 'Good Night!';

  return (
    <div className="App">
      <img src={currentImage} alt="Current" />
      <button
        className={`button-71 ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default App;
