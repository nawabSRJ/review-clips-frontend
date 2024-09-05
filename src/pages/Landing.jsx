import React from 'react'
import Header from '../Components/Header'
import mainPic from '../assets/homePic.webp'
import aboutPic from '../assets/aboutPic.jpg'
import sendReviewPic from '../assets/sendReview.avif'
import receiveReviewPic from '../assets/receiveReview.jpg'
import Footer from '../Components/Footer'

export default function Landing() {
    return (
        <div>
            <Header />
            <div class="main flex sm:flex-row flex-col justify-around mt-20">
                <div className='main-left text-left  bg-white-300 sm:w-[40%] w-full'>
                    <h1 class="sm:text-6xl text-5xl  sm:text-left text-center pl-5 sm:pt-5 pt-3 mt-5 text-emerald-600">Collecting Reviews <br /> Made Easy</h1>
                    <p class="sm:text-left text-center pl-5 p-3 my-3 text-2xl">Collect eye-catch testimonials from your clients without <span class="text-red-600">hassle</span> for design</p>
                    <br />
                    <div class="btns text-center flex sm:flex-row flex-col justify-start pl-5">
                        <a href={'/send-review'}><button class="text-center py-4 px-6 rounded-full text-2xl bg-emerald-400 hover:bg-emerald-600 mr-2 sm:my-0 my-3">Send Quick Review</button></a>
                        <a href={'/register'}> <button class="text-center py-4 px-6 rounded-full text-2xl bg-emerald-400 hover:bg-emerald-600 ml-2 sm:my-0 my-3">Receive Review</button>
                        </a>
                    </div>
                </div>

                <div className='main-right bg-red-300 sm:w-[40%] w-full'>
                    <img src={mainPic} alt='main pic' className='w-[100%]' />
                </div>
            </div> {/* main section ends */}

            <br /><br /><br />

            <div className='bg-white mt-2'>
                <div id='aboutSect' className="about h-4/5 z-2 w-[80%] mx-auto flex flex-col items-center justify-center bg-white">
                    <h1 className='text-5xl text-center'>About</h1> <br />
                    <div className="container flex flex-col sm:flex-row items-center justify-center p-10 gap-10">

                        <div className="abt-left flex-grow flex justify-center sm:justify-end sm:mr-4 w-full sm:w-2/5">
                            <div className="text-center sm:text-left">
                                <h1 className="mb-3 text-2xl"><b>Welcome :)</b></h1>
                                <p className='leading-10 mb-3 text-xl'>
                                    We are your go-to platform for capturing and sharing genuine feedback. Whether you're a business seeking honest reviews from your customers or an individual looking to share your experiences, Review Clips makes it easy and seamless. Our platform allows users to submit reviews ensuring that feedback is not just heard but seen. Built with a user-friendly interface, Review Clips is designed to <b>connect businesses and consumers</b>, fostering trust and transparency through authentic reviews. Join us in creating a community where every voice matters, and every experience is valued. <br />
                                </p>
                            </div>
                        </div>
                        <div className="abt-right flex-grow flex justify-center sm:justify-start sm:ml-4 w-full sm:w-1/5">
                            <img src={aboutPic} alt='about pic' className="rounded-md h-[400px] w-[400px] " />
                        </div>
                    </div>
                </div>
            </div>    {/* end of about page */}


            <div id='guideSect' className='bg-white mt-10'>
                <div className="about h-4/5 z-2 w-[95%] mx-auto flex flex-col items-center justify-center bg-white">
                    <h1 className='text-5xl text-center'>How to Use?🔍</h1> <br />
                    <div className="container flex flex-col items-center justify-center p-5 gap-10">
                        <div className="container flex flex-col sm:flex-row items-center justify-center p-10 gap-10">

                            <div className="abt-left flex-grow flex justify-center sm:justify-end sm:mr-4 w-full sm:w-2/5">
                                <div className="text-center sm:text-left">
                                    <h1 className="mb-3 text-2xl"><b>Send Quick Review</b></h1>
                                    <p className='leading-10 mb-3 text-xl'>
                                        This feature is built to give/receive <b>instant feedback</b>. It can be used directly at workplaces or by consumers to give feedbacks as per choice. Using this, one will have to fill the feedback form and download the pdf on their end and then share with the concerned person. No hassle for login or creating an accout :) <br />
                                    </p>
                                </div>
                            </div>
                            <div className="abt-right flex-grow flex justify-center sm:justify-start sm:ml-4 w-full sm:w-1/5">
                                <img src={sendReviewPic} alt='send review' className="rounded-md h-[350px] w-[900px] " />
                            </div>


                        </div>
                        {/* ---------------------------- */}
                        <div className="container flex flex-col sm:flex-row items-center justify-center p-5 gap-10">

                            <div className="abt-left flex-grow flex justify-center sm:justify-end sm:mr-4 w-full sm:w-2/5">
                                <div className="text-center sm:text-left">
                                    <h1 className="mb-3 text-2xl"><b>Receive Review</b></h1>
                                    <p className='leading-10 mb-3 text-xl'>
                                        This feature is specially designed for enterprises who would want to keep track of <b>all their feedbacks in one place</b> and would not like to disturb their users to find out site and then send the review.
                                        Using this, a receiver can generate a unique link on following which the consumer can submit their feedback which will be posted on the receiver's dashboard :) <br />
                                    </p>
                                </div>
                            </div>
                            <div className="abt-right flex-grow flex justify-center sm:justify-start sm:ml-4 w-full sm:w-1/5">
                                <img src={receiveReviewPic} alt='receive review' className="rounded-md h-[400px] w-[900px] " />
                            </div>


                        </div>


                    </div>
                </div>
            </div>    {/* end of guide page (send review) */}

            <Footer />
        </div>
    )
}
