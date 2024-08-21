import React, { useState } from 'react';
import axios from 'axios';
import ReviewForm from '../Components/ReviewForm';
import First from '../TestimonialsDesign/First';
import { useParams } from 'react-router-dom'; // To get the unique ID from the URL

export default function ReceiveReview() {
  const { uniqueId } = useParams(); // Get unique ID from the URL
  let [feedback, setFeedback] = useState('');
  let [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (img) => {
    setImage(img);
  };

 
const handleSubmit = () => {
    console.log({ name, feedback, image });  // Log the data to verify
    axios.post(`https://review-clips-backend.onrender.com/review/${uniqueId}`, { name, feedback, image })
      .then(() => {
        alert("Review submitted successfully!");
      })
      .catch(error => {
        console.error(error);
        alert("Failed to submit review.");
      });
  };

  
  return (
    <div>
      <ReviewForm setFeedback={setFeedback} setName={setName} onImageChange={handleImageChange} />
      <First feedback={feedback} name={name} image={image} />
      <center><button onClick={handleSubmit} className="bg-green-400 py-2 px-4 text-2xl rounded-full mt-4">
        Submit
      </button>
      </center>
    </div>
  );
}
