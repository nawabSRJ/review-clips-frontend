import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Register() {
  // let [lstate, setLState] = useState(false);  // ? why

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  // Function to validate inputs
  const validateInputs = () => {
    // Trim leading and trailing spaces
    const trimmedName = name.trim();

    // Check if trimmedName contains at least two alphanumeric characters
    const hasMinTwoLetters = trimmedName.replace(/\s+/g, '').length >= 2;

    // Check if name has at least two words and is not just spaces
    const nameWords = trimmedName.split(/\s+/);
    if (nameWords.length < 2 || !hasMinTwoLetters) {
      NotificationManager.error('Please enter a valid name with at least two alphanumeric characters and at least two words.', 'Error');
      return false;
    }
    // Check if password is at least 5 characters long
    if (password.length < 5) {
      NotificationManager.error('Password must be at least 5 characters long.', 'Error');
      return false;
    }

    // Check if email is empty
    if (email.trim().length === 0) {
      NotificationManager.error('Email cannot be empty.', 'Error');
      return false;
    }

    // If all validations pass
    return true;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs before proceeding
    if (!validateInputs()) {
      return; // Exit if validation fails
    }
    setLoading(true); // when the request starts -> set to true
    axios.post('https://review-clips-backend.onrender.com/register', { name, email, password })
      .then(result => {
        console.log(result)
        navigate('/login')

      })

      .catch(err => console.log(err));
  };

  return (
    <div className='flex sm:flex-row flex-col min-h-screen justify-center items-center'>
      {
        loading
          ?
          <img src='https://i.gifer.com/ZKZg.gif' alt='loading gif' />
          :
          <div className='registerBox w-[500px] h-[400px] bg-blue-600 text-center mx-auto'>
            <h2 className='text-3xl text-white px-5 py-3 font-cambria'><b>Sign-Up</b></h2>
            <form onSubmit={handleSubmit}>
              <input type='text' className='px-4 py-2 my-3 ' placeholder='Enter Name...' onChange={(e) => setName(e.target.value)} /> <br />
              <input type='email' className='px-4 py-2 my-3 ' placeholder='Enter email id...' onChange={(e) => setEmail(e.target.value)} /> <br />
              <input type='password' className='px-4 py-2 my-3 ' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
              <button type='submit' className='w-[80%] mt-3 text-2xl text-center bg-white text-blue-600 py-3'>SignUp</button>

              <p className='text-blue-600 py-1 rounded-full w-[70%] mx-auto bg-white mt-5'>Already have an account? <Link to={'/login'}><span className='text-underline text-black'>Sign-in</span></Link></p>
            </form>
          </div>
      }

      <NotificationContainer />
    </div>
  );
}
