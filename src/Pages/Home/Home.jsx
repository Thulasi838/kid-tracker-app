import React from 'react';
import './Home.css'; // Add a CSS file for styling
import kidsImage from '../../assets/kids-image.png';
import { NavLink } from "react-router";

function Home() {
  return (
    <div className="home-container">
      {/* Header */}
      
      <header className="header">
        <h1 className="app-name">KidTrack</h1>
      </header>

      {/* Body Content */}
      <div className="home-content">
        
        <h2 className="home-title">Welcome to KidTrack</h2>
        <p className="home-description">
          Keep track of your child's activities and milestones effortlessly. With KidTrack, parents can monitor and guide their kids to a balanced and productive lifestyle.
        </p>
        <img src={kidsImage} alt="Kids" />
        <div className="button-container">
          <button
            className="login-button"
          >
            <NavLink to="/LogIn">Log In</NavLink>
          </button>
          <button
            className="signup-button"
          >
            <NavLink to="/SignUp">Sign Up</NavLink>
          </button>
          <button
            className="signup-button"
          >
            <NavLink to="/Child_Dashboard">Go to Dashboard</NavLink>
          </button>

        </div>
      </div>
    </div>
  );
}

export default Home;
