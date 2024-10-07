// Alert.js
import React from 'react';
import Swal from 'sweetalert2';

const Alert = {
  success: (title, text) => {
    Swal.fire({
      icon: 'success',
      title: title || 'Success!',
      text: text || 'Your action was successful.',
      confirmButtonText: 'OK',
    });
  },

  warning: (title, text) => {
    Swal.fire({
      icon: 'warning',
      title: title || 'Warning!',
      text: text || 'Please be cautious with your actions.',
      confirmButtonText: 'Understood',
    });
  },

  error: (title, text) => {
    Swal.fire({
      icon: 'error',
      title: title || 'Error!',
      text: text || 'Something went wrong.',
      confirmButtonText: 'OK',
    });
  },

  confirmation: (title, text) => {
    return Swal.fire({
      title: title || 'Are you sure?',
      text: text || 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, proceed!',
      cancelButtonText: 'Cancel',
    });
  },
};

export default Alert;
