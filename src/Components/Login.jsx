import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Login() {

    // const [name, setName] = useState('');  no need here
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // when the request starts -> set to true
        axios.post('https://reviewclips.netlify.app/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.message === "Success") {
                    navigate('/dashboard', { state: { user: result.data.user } });
                    setLoading(false);
                }
                else if (result.data.message === "No record found") {
                    setLoading(false); // stop loading
                    NotificationManager.error('Please Re-enter details', 'No Record Found :/')

                }
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });

    };

    return (
        <div className='flex sm:flex-row flex-col min-h-screen justify-center items-center'>
            <NotificationContainer />
            {
                loading
                    ?
                    <img src='https://i.gifer.com/ZKZg.gif' alt='loading gif' />
                    :
                    <div className='LoginBox w-[500px] h-[300px] bg-blue-600 text-center mx-auto'>
                        <h2 className='text-3xl text-white px-5 py-3 font-cambria'><b>Login</b></h2>
                        <form onSubmit={handleSubmit}>
                            <input type='email' className='px-4 py-2 my-3 ' placeholder='Enter email id...' onChange={(e) => setEmail(e.target.value)} /> <br />
                            <input type='password' className='px-4 py-2 my-3 ' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit' className='w-[80%] mt-3 text-2xl text-center bg-white text-blue-600 py-3'>Login</button>
                        </form>
                    </div>
            }
        </div>

    )
}
