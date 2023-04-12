import React, { useState } from 'react';
import axios from 'axios'; // import axios library
import { useDispatch } from 'react-redux';
import { addData } from '../store/actions';

const AddUser = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: '', salary: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addData(userData));
    setUserData({name: "", salary: ""});
  };

  const handleInputChange = (event) => {
    setUserData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
    <div style={{display: "flex", flexDirection: 'column', gap: "10px"}}>
      <label>
        Name:
        <input type='text' name='name' value={userData.name} onChange={handleInputChange} />
      </label>
      <label>
        Salary:
        <input type='number' name='salary' value={userData.salary} onChange={handleInputChange} />
      </label>
      <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default AddUser;
