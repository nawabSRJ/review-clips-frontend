import React, { useState , useEffect } from 'react'
import axios from 'axios';
import Landing from './Landing'
import Dashboard from './Dashboard'

export default function Home() {
  let [auth, setAuth] = useState(false);
  let [, setMail] = useState('');
  let [, setMsg] = useState('');

  useEffect(() => {
    axios.get('https://reviewclips.netlify.app', { withCredentials: true })
      .then(res => {
        if (res.data.status === "Success") {
          setAuth(true);
          console.log('Authenticated:', true); // Debugging
          setMail(res.data.email);

        } else {
          setAuth(false);
          setMsg(res.data.message);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {
        auth
          ?
          <Dashboard setAuth={setAuth} setMail={setMail} setMsg={setMsg} />
          :
          <Landing />

      }
    </div>
  )
}
