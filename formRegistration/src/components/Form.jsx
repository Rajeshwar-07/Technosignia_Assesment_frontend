// Import your Form.css file here if not already done

import React, { useState } from "react";
import './Form.css';
import { Grid, Paper, TextField, Button } from "@mui/material";

function FormComponent() {
  const paperStyle = { padding: `10px 20px`, margin: "auto" };
  const textFieldStyle = { marginTop: 10 };
  const buttonStyle = { marginTop: 50 };

  // email validation 
  const [email, setEmail] = useState('');
  const [emailMessage, setemailMessage] = useState('');

  const emailValidation = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(savedata.email)) {
      setemailMessage('Invalid email');
    } else {
      setemailMessage(''); 
    }
  };
  


  // password validation
  const [password, setPassword] = useState('');
  const [passwordMessage, setpasswordMessage] = useState('');

  const passwordValidation = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]{4,}$/;
    if (!passwordRegex.test(savedata.password)) {
      setpasswordMessage("Invalid password");
    } else {
      setpasswordMessage('');
    }
  };
 

  
  // confirm password validation 
const [confirmPassword, setConfirmPassword] = useState('');
const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');

const confirmPasswordValidation = () => {
  if (savedata.confirmPassword !== savedata.password) {
    setConfirmPasswordMessage('Passwords not match');
  } else {
    setConfirmPasswordMessage('');
  }
};


  // form data 
  const [formData, setFormData] = useState([]);

  const [savedata, setData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  
    if (e.target.name === 'email') {
      emailValidation();
    } 
    if (e.target.name === 'password') {
      passwordValidation(); 
    } 
    if (e.target.name === 'confirmPassword') {
      confirmPasswordValidation();
    }
  };

  const handleOnSubmit = (e) => {
    

    e.preventDefault();

    if (
      !savedata.fullName ||
      !savedata.email ||
      !savedata.password ||
      !savedata.confirmPassword
    ) {
      // alert("Please fill in all fields.");
      return;
    }
    
    setFormData([...formData, savedata]);
    setData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });


    if (!emailMessage && !passwordMessage && !confirmPasswordMessage) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <form onSubmit={handleOnSubmit}>
          <TextField
            style={textFieldStyle}
            fullWidth
            name="fullName"
            value={savedata.fullName}
            onChange={handleInputChange}
            label="Name"
          />
          <TextField
            style={textFieldStyle}
            fullWidth
            name="email" 
            value={savedata.email}
            onChange={handleInputChange}
            onKeyUp={emailValidation}
            label="Email" 
          />
          <span className="emailErrorMsg">{emailMessage}</span>
          <TextField
            style={textFieldStyle}
            fullWidth
            name="password"
            value={savedata.password}
            onChange={handleInputChange}
            onKeyUp={passwordValidation}
            label="Password"
          />
          <span className="passwordErrorMsg">{passwordMessage}</span>
          <TextField
            style={textFieldStyle}
            fullWidth
            name="confirmPassword"
            value={savedata.confirmPassword}
            onChange={handleInputChange}
            onKeyUp={confirmPasswordValidation}
            label="Confirm Password"
          />
          <span className="confirmPasswordErrorMsg">{confirmPasswordMessage}</span>
      
          <Button style={buttonStyle} type="submit" variant="contained" className="button">
            Submit
          </Button>
        </form>
      </Paper>
      <div className="displayData">
        {formData.map((data, index) => (
          <div key={index}>
            <p>Name: <span className="addSpace">{data.fullName}</span></p>
            <p>Email: <span className="addSpace">{data.email}</span></p>
            <p>Password: <span className="addSpace">{data.password}</span></p>
            <p>Confirm Password: <span className="addSpace">{data.confirmPassword}</span></p>
          </div>
        ))}
      </div>
    </Grid>
  );
}

export default FormComponent;
