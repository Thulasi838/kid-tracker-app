import React, { useState } from 'react';
import './Child_Dashboard.css'; // Your styling
import Child from './Child.jsx';

function Child_Dashboard() {
  const [childDetails, setChildDetails] = useState([]);
  const [child, setChild] = useState({
    name: '',
    age: '',
    gender: '',
  });
  const [showForm, setShowForm] = useState(false); // To toggle the form visibility
  const [notification, setNotification] = useState(''); // To display notifications

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChild({
      ...child,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for duplicates before adding
    const isDuplicate = childDetails.some(
      (existingChild) =>
        existingChild.name === child.name &&
        existingChild.age === child.age &&
        existingChild.gender === child.gender
    );

    if (isDuplicate) {
      setNotification('Duplicate child details! Please enter unique details.');
      setTimeout(() => setNotification(''), 3000); // Hide the notification after 3 seconds
      return; // Prevent adding duplicate child details
    }

    setChildDetails((prev) => [...prev, child]); // Add the new child details
    setChild({ name: '', age: '', gender: '' }); // Reset the form
    setShowForm(false); // Hide the form after submission
    setNotification(''); // Clear any previous notification
  };

  // Function to handle deletion of a child
  const handleDelete = (index) => {
    const updatedChildDetails = childDetails.filter((_, i) => i !== index);
    setChildDetails(updatedChildDetails);
  };

  return (
    <div className="dashboard">
      <h1>Child Dashboard</h1>
      <button className="button-link" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add Child'}
      </button>

      {notification && (
        <div className="notification">{notification}</div> // Display notification
      )}

      {showForm && (
        <div className="child-form">
          <h2>Add Child Details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={child.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Age: </label>
              <input
                type="number"
                name="age"
                value={child.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Gender: </label><br />
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={child.gender === 'Male'}
                onChange={handleChange}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={child.gender === 'Female'}
                onChange={handleChange}
              />
              Female
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={child.gender === 'Other'}
                onChange={handleChange}
              />
              Other
            </div>
            <button type="submit">Add Child</button>
          </form>
        </div>
      )}

      <div className="childs">
        {childDetails.length > 0 ? (
          childDetails.map((child, index) => (
            <div key={index} className="child">
              <Child name={child.name} age={child.age} gender={child.gender} />
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No children added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Child_Dashboard;
