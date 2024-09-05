import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Landing from './Landing';
import Dashboard from './Dashboard';

export default function Home() {
  const [auth, setAuth] = useState(false);
  const [mail, setMail] = useState('');
  const [msg, setMsg] = useState('');
  
  useEffect(() => {
    axios.get('https://reviewclips.netlify.app', { withCredentials: true })
      .then(res => {
        if (res.data.status === "Success") {
          setAuth(true);
          setMail(res.data.email);
        } else {
          setAuth(false);
          setMsg(res.data.message);
        }
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
      });
  }, []);

  return (
    <div>
      {auth ? (
        <Dashboard setAuth={setAuth} setMail={setMail} setMsg={setMsg} mail={mail} msg = {msg} />
      ) : (
        <Landing />
      )}
    </div>
  );
}
