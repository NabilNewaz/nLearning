import { Avatar, Button, Card, Rating, Sidebar } from 'flowbite-react';
import { HiServer } from "react-icons/hi";
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import CourseViewCard from '../Shared/Courses/CourseViewCard';
import { BsFillPeopleFill } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";

const Coursedetails = () => {
    const CourseDetails = useLoaderData();
    const [allCourseDetails, setAllCourseDetails] = useState([]);

    const toastMsg = () => {
        toast.success('Successfully Enrolled!');
    }

    useEffect(() => {
        fetch(`http://localhost:5000/courses`)
            .then((response) => response.json())
            .then((actualData) => setAllCourseDetails(actualData))
            .catch((err) => {
                toast.error(err.message);
            });
    }, []);
    return (
        <div className='container mx-auto px-2 md:px-5 mb-5 mt-2'>
            <div className='flex-col flex lg:flex-row'>
                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card>
                        <img className='object-cover h-80 w-full rounded-lg' src={CourseDetails.course_img} alt="" />
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {CourseDetails.course_name}
                            </h5>
                            <p className="font-normal text-sm text-gray-700 dark:text-gray-400 mt-1">
                                {CourseDetails.course_skills}
                            </p>
                        </div>
                        <div>
                            <p className='text-2xl font-semibold dark:text-white'>About this Course</p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {CourseDetails.course_discription}
                            </p>
                        </div>
                        <div className='md:flex items-center justify-between'>
                            <div>
                                <p className='text-2xl font-semibold dark:text-white'>Instructors</p>
                                <p className='text-sm font-semibold dark:text-white'>Instructor rating {CourseDetails?.course_instructor?.rating}/5 (5,740 Ratings)</p>
                                <div className='flex mt-2'>
                                    <Avatar
                                        img={CourseDetails.course_instructor.img}
                                        size="lg"
                                        rounded={true}>
                                        <div className="font-medium dark:text-white">
                                            <div>
                                                {CourseDetails?.course_instructor?.name}
                                            </div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                                {CourseDetails.course_instructor.designation}
                                            </div>
                                            <div className='flex items-center'>
                                                <BsFillPeopleFill className='text-gray-500' />
                                                <p className='text-gray-500 ml-1'>{CourseDetails.course_instructor.learners}<span className='font-normal'> Learners</span></p>
                                            </div>
                                            <div className='flex items-center'>
                                                <FiBookOpen className='text-gray-500' />
                                                <p className='text-gray-500 ml-1'>{CourseDetails.course_instructor.courses}<span className='font-normal'> Courses</span></p>
                                            </div>
                                        </div>
                                    </Avatar>
                                </div>
                            </div>
                            <div className="flex flex-col lg:items-end items-center mt-5 md:mt-12">
                                <div className="md:mb-2 flex items-center">
                                    <Rating>
                                        <Rating.Star filled={CourseDetails.course_rating < 1 ? false : true} />
                                        <Rating.Star filled={CourseDetails.course_rating < 2 ? false : true} />
                                        <Rating.Star filled={CourseDetails.course_rating < 3 ? false : true} />
                                        <Rating.Star filled={CourseDetails.course_rating < 4 ? false : true} />
                                        <Rating.Star filled={CourseDetails.course_rating < 5 ? false : true} />
                                    </Rating>
                                    <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                        {CourseDetails.course_rating}
                                    </span>
                                </div>
                                <p>
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                        <span className='text-3xl font-extrabold mr-1'>৳</span>{CourseDetails.course_price} BDT
                                    </span>
                                </p>
                            </div>
                        </div>
                        <Button onClick={toastMsg}>
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
                    </Card>
                </div>
                <div className="lg:w-2/6 h-screen px-0.5 md:mt-5 lg:mt-0 lg:px-0 drop-shadow-lg border rounded">
                    <Sidebar className='w-full h-full' aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Collapse className='bg-gray-100 dark:bg-gray-700' disabled icon={HiServer} label="Other Courses" expand={true}>
                                </Sidebar.Collapse>

                                <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-1 gap-x-3">
                                    {allCourseDetails.map(course => <CourseViewCard adOnStyle={{ style: 'mb-3' }} key={course.course_id} course={course}></CourseViewCard>)}
                                </div>

                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </div >
        </div >
    );
};

export default Coursedetails;