import React from 'react';
import './Child.css';

function Child({ name, age, gender }) {
  return (
    <div className="child-card">
      <h3>Child Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
    </div>
  );
}

export default Child;
