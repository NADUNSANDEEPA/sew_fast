import * as React from 'react';
import { Box, TextField, Button, Typography, FormControl, FormHelperText } from '@mui/material';
import { useState } from 'react';
import ButtonComp from '../components/Button';
import TxtField from '../components/TextFeild';
import DataForm from '../components/Form';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form data submitted:', formData);
      // Handle form submission logic (e.g., API call)
    }
  };

  return (
    <DataForm onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" gutterBottom>
        Sign Up
      </Typography>

      {/* Name Field */}
      <FormControl error={!!errors.name}>
        <TxtField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}  // Highlight if there's an error
          helperText={errors.name} // Show error message
        />
      </FormControl>


      <FormControl error={!!errors.email}>
        <TxtField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}  
          helperText={errors.email} 
        />
      </FormControl>

      <FormControl error={!!errors.password}>
        <TxtField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}  
          helperText={errors.password} 
        />
      </FormControl>

      <ButtonComp type="submit" variant='filled'>
        Submit
      </ButtonComp>
    </DataForm>
  );
}
