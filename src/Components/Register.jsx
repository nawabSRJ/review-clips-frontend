import React, { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  // let [lstate, setLState] = useState(false);  // ? why

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://review-clips-backend.onrender.com/register', { name, email, password })
      .then(result =>{ console.log(result)
        navigate('/login')
      })

      .catch(err => console.log(err));
  };

  return (
    <div className='flex sm:flex-row flex-col min-h-screen justify-center items-center'>
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
    </div>
  );
}
