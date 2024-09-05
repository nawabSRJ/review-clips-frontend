import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SendReview from './pages/SendReview';
import Dashboard from './pages/Dashboard';
import Register from './Components/Register';
import Login from './Components/Login';
import ReceiveReview from './pages/ReceiveReview';
import Protected from './Components/Protected';



const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about-us',
      element:<About/>
    },
    {
      path:'/send-review',
      element:<SendReview/>
    },
    {
      path:'/dashboard',
      element:<Protected Component={Dashboard}/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/receive-review/:uniqueId', // Add the route for ReceiveReview with dynamic parameter
      element:<ReceiveReview/>
    },
  ]
)
root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
