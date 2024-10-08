import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    accountNumber: '',
    password: ''
  });

  const { fullName, idNumber, accountNumber, password } = formData;

  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name); // Only allows letters and spaces
  const validateIdNumber = (id) => /^[0-9]{13}$/.test(id); // ID number should be 13 digits
  const validateAccountNumber = (account) => /^[0-9]{10}$/.test(account); // 10 digits for account number
  const validatePassword = (password) => password.length >= 8; // Password should be at least 8 characters long

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!validateName(fullName)) {
      return alert('Full Name must contain only letters and spaces.');
    }
    if (!validateIdNumber(idNumber)) {
      return alert('ID Number must be 13 digits long.');
    }
    if (!validateAccountNumber(accountNumber)) {
      return alert('Account Number must be 10 digits long.');
    }
    if (!validatePassword(password)) {
      return alert('Password must be at least 8 characters long.');
    }

    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      console.log(res.data);
      alert('User registered successfully!');
    } catch (err) {
      console.error(err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="fullName" value={fullName} onChange={onChange} placeholder="Full Name" required />
      <input type="text" name="idNumber" value={idNumber} onChange={onChange} placeholder="ID Number" required />
      <input type="text" name="accountNumber" value={accountNumber} onChange={onChange} placeholder="Account Number" required />
      <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
