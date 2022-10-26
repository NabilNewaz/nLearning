import { Button } from 'flowbite-react';
import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const CourseDetails = useLoaderData();
    const handelSucess = (msg) => {
        toast.success(msg);
    }
    return (
        <div>
            <div className="container px-3 md:px-5 mt-3 mb-5 mx-auto">
                <div className="flex flex-col-reverse w-full px-0 mx-auto md:flex-row">
                    <div className="flex flex-col md:w-full">
                        <h2 className="mb-4 font-bold text-gray-600 dark:text-gray-400 md:text-xl text-heading ">Give Your Information
                        </h2>
                        <form className="justify-center w-full mx-auto" method="post" action>
                            <div className="">
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">First
                                            Name</label>
                                        <input name="firstName" type="text" placeholder="First Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="firstName" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">Last
                                            Name</label>
                                        <input name="Last Name" type="text" placeholder="Last Name"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Email"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">Email</label>
                                        <input name="Last Name" type="text" placeholder="Email"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400" />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="w-full">
                                        <label for="Address"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">Address</label>
                                        <textarea
                                            className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400"
                                            name="Address" cols="20" rows="4" placeholder="Address"></textarea>
                                    </div>
                                </div>
                                <div className="space-x-0 lg:flex lg:space-x-4">
                                    <div className="w-full lg:w-1/2">
                                        <label for="city"
                                            className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">City</label>
                                        <input name="city" type="text" placeholder="City"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400" />
                                    </div>
                                    <div className="w-full lg:w-1/2 ">
                                        <label for="postcode" className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300">
                                            Postcode</label>
                                        <input name="postcode" type="text" placeholder="Post Code"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400" />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <label className="flex items-center text-sm group text-heading">
                                        <input type="checkbox"
                                            className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 dark:bg-gray-700 dark:placeholder-gray-400 dark:border-gray-400" />
                                        <span className="ml-2 dark:text-gray-300">Save this information for next time</span></label>
                                </div>
                                <div className="relative pt-3 xl:pt-6"><label for="note"
                                    className="block mb-3 text-sm font-semibold text-gray-500 dark:text-gray-300"> Notes
                                    (Optional)</label><textarea name="note"
                                        className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400"
                                        rows="4" placeholder="Notes for delivery"></textarea>
                                </div>
                                <div className="mt-4">
                                    <Button onClick={() => handelSucess('Successfully Enrolled!')} className='w-full'>
                                        Enroll Now
                                        <svg
                                            className="ml-2 -mr-1 h-4 w-4"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col w-full ml-0 md:ml-6 lg:ml-12 lg:w-2/4">
                        <div className="pt-0 md:pt-0 2xl:ps-4">
                            <h2 className="text-xl text-gray-600 dark:text-gray-400 font-bold">Course Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-center md:items-start space-x-4">
                                        <div>
                                            <img src={CourseDetails.course_img} alt="Course" className='w-72 rounded' />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold dark:text-gray-300">{CourseDetails.course_name}</h2>
                                            <p className="text-sm dark:text-gray-300">{CourseDetails.course_skills}</p>
                                            <span className="text-black-600 dark:text-gray-300">Price :</span> <span className='dark:text-gray-300 font-semibold'> <span className='text-md font-extrabold mr-1'>৳</span>{CourseDetails.course_price}</span>
                                        </div>
                                        <Link to={`/course/${CourseDetails.course_id}`}>
                                            <div className='dark:text-gray-300'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex pt-4 mt-4">
                                <h2 className="text-xl font-bold dark:text-gray-400">Item Price</h2>
                            </div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold dark:text-gray-400 dark:border-gray-400 border-b border-gray-300 lg:py-5 lg:px-0 text-heading last:border-b-0 last:text-base last:pb-0">
                                Subtotal :<span className="ml-2"><span className='text-md font-extrabold mr-1'>৳</span>{CourseDetails.course_price}</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold dark:text-gray-400 dark:border-gray-400 border-b border-gray-300 lg:py-5 lg:px-0 text-heading last:border-b-0 last:text-base last:pb-0">
                                Shipping Tax :<span className="ml-2 dark:text-gray-400"><span className='text-md font-extrabold mr-1'>৳</span>100</span></div>
                            <div
                                className="flex items-center w-full py-4 text-sm font-semibold dark:text-gray-400 border-b border-gray-300 lg:py-5 lg:px-0 text-heading last:border-b-0 last:text-base last:pb-0">
                                Total :<span className="ml-2 dark:text-gray-400"><span className='text-md font-extrabold mr-1'>৳</span>{parseInt(CourseDetails.course_price) + 100}</span></div>
                            <Button onClick={() => handelSucess("Payment Successful!")} className='w-full mt-4 mb-5 md:mb-0'>
                                Pay Now
                                <svg
                                    className="ml-2 -mr-1 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;