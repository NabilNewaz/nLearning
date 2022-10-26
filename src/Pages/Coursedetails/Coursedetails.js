import { Button, Card, Sidebar } from 'flowbite-react';
import { HiServer } from "react-icons/hi";
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import CourseViewCard from '../Shared/Courses/CourseViewCard';

const Coursedetails = () => {
    const CourseDetails = useLoaderData();
    const [allCourseDetails, setAllCourseDetails] = useState([]);

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
            <div className='flex-col flex md:flex-row'>
                <div className='w-full mr-5 mb-5 md:mb-0'>
                    <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {CourseDetails.course_name}
                        </h5>
                        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
                            {CourseDetails.course_skills}
                        </p>
                        <Button>
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
                <div className="md:w-2/6 px-0.5 md:px-0 drop-shadow-lg overscroll-auto">
                    <Sidebar className='w-full' aria-label="Sidebar with multi-level dropdown example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Collapse className='bg-gray-100 dark:bg-gray-700' disabled icon={HiServer} label="Other Courses" expand={true}>
                                </Sidebar.Collapse>

                                <div className="w-full">
                                    {allCourseDetails.map(course => <CourseViewCard adOnStyle={{ style: 'mb-3' }} key={course.course_id} course={course}></CourseViewCard>)}
                                </div>

                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </div>
        </div >
    );
};

export default Coursedetails;