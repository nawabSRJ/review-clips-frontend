import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import axios from 'axios';

export default function Dashboard({setAuth , setMail , setMsg}) {
    const location = useLocation();
    const { user } = location.state || { user: { name: 'User' } };
    const [reviews, setReviews] = useState([]);
    // Create a ref array to store refs for each review
    const reviewRefs = useRef([]);

    useEffect(() => {
        // Fetch the updated user data including reviews
        axios.get(`https://review-clips-backend.onrender.com/user/${user._id}`)
            .then(response => {
                setReviews(response.data.reviews || []);
            })
            .catch(error => console.log(error));
    }, [user._id]);

    const handleAddReview = () => {
        const userId = user._id;
        const reviewLink = `https://reviewclips.netlify.app/receive-review/${userId}`;

        alert(`Copy this link to receive reviews: ${reviewLink}`);
    };

    const handleLogout = () => {
        axios.post('https://reviewclips.netlify.app/logout', {}, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    setAuth(false);  // Reset auth state
                    setMail('');      // Clear email
                    setMsg(res.data.message);  // Optionally show message
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <div className="navbar w-[100%] bg-stone-100 sm:text-2xl flex sm:flex-row justify-evenly">
                <div className="container sm:flex-row flex-col flex flex-wrap items-center mx-auto">
                    <a href='/' className="text-blue-600 text-4xl md:py-1 flex flex-col my-0">
                        Welcome {user.name}
                    </a>
                </div>
            </div>
            <div className='flex flex-row justify-start'>
                <h2 className='text-3xl text-zinc-950 py-5 px-5'>All your Reviews 🔖</h2>
                <button onClick={handleAddReview} className='bg-black text-blue-600 ml-5 px-4 py-0 rounded-full text-center text-2xl'>
                    Add Review
                </button>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>

            <hr className='w-[70%] ml-4 border-t-2 border-blue-600' />
            <div className='reviews-container w-[90%] flex flex-col flex-wrap justify-evenly text-left mx-auto' >
                {reviews.map((review, index) => (
                    <div key={index} className='bg-slate-200 my-5 p-4 '>
                        {/* Assign a ref for each review to avoid the same review print problem */}
                        <div ref={(el) => (reviewRefs.current[index] = el)} className="outer-box mx-auto container sm:h-[90%] sm:w-[60%] h-[90%] w-[70%] bg-green-400 pt-5">
                            <div className="inner-box mx-auto container sm:h-[95%] sm:w-[80%] h-[95%] w-[85%] bg-white pt-5 pb-15">
                                <h3 className="sm:text-3xl text-2xl text-center text-black font-playwrite-cursive">
                                    Our Client
                                </h3>
                                {review.image && <img src={review.image} alt="Review" className="bg-rose-400 h-[200px]  w-[200px] mx-auto rounded-full bg-no-repeat bg-contain mt-10" />}
                                <div className="review-block">
                                    <p className="review-text text-center px-4 py-4 mt-2 text-xl">
                                        {review.feedback}
                                    </p>
                                </div>
                                <strong>
                                    <div className="user-name text-center text-4xl">
                                        {review.name}
                                    </div>
                                </strong>

                                <div className="star-design text-center text-2xl my-5 rounded">
                                    ⭐⭐<span className="text-4xl">⭐</span>⭐⭐
                                </div>
                            </div>
                        </div> {/* outer box ended */}

                        {/* Use the specific ref for the current review */}
                        <center>
                            <ReactToPrint
                                trigger={() => <button className="bg-green-400 py-2 px-4 text-2xl rounded-full my-5">Print Feedback</button>}
                                content={() => reviewRefs.current[index]}
                                documentTitle="Feedback"
                                pageStyle="print"
                            />
                        </center>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
