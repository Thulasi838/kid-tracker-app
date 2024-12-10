// Child_Form.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router";
import dashboardContext from './ChildContext';

function Child_Form() {
  const navigate = useNavigate();
  const {setChildDetails} = useContext(dashboardContext)

  const [child, setChild] = useState({
    name: '',
    age: '',
    gender: ''
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setChild({
      ...child,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    console.log(child);
    e.preventDefault();
    setChildDetails((prev) => [...prev, child]);  // Add the new child details to parent state
    setChild({name: '',age: '',gender: ''});

    // Redirect back to Child_Dashboard after submission
    navigate("/Child_Dashboard");
  };

  return (
    <div>
      <h2>Add Child Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={child.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" value={child.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender: </label><br/>
          <input type="radio" name="gender" value="Male" checked={child.gender === 'Male'} onChange={handleChange} />
          Male
          <input type="radio" name="gender" value="Female" checked={child.gender === 'Female'} onChange={handleChange} />
          Female
          <input type="radio" name="gender" value="Other" checked={child.gender === 'Other'} onChange={handleChange} />
          Other
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Child_Form;
