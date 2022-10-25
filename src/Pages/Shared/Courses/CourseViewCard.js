import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CourseViewCard = ({ course }) => {
    const { course_id, course_name, course_img, course_skills, course_price, course_ratting } = course;
    return (
        <div>
            <div className="max-w-lg">
                <Card
                    imgAlt={course_name}
                    imgSrc={course_img} >
                    <Link to={`/course/${course_id}`}>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {course_name}
                        </h5>
                        <p className='mt-2 text-sm dark:text-white'>
                            <span className='font-semibold'>Skills you'll gain: </span>{course_skills.slice(0, 70)}...
                        </p>
                    </Link>
                    <div className="mt-2.5 mb-5 flex items-center">
                        <Rating>
                            <Rating.Star filled={course_ratting < 1 ? false : true} />
                            <Rating.Star filled={course_ratting < 2 ? false : true} />
                            <Rating.Star filled={course_ratting < 3 ? false : true} />
                            <Rating.Star filled={course_ratting < 4 ? false : true} />
                            <Rating.Star filled={course_ratting < 5 ? false : true} />
                        </Rating>
                        <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            {course_ratting}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            <span className='text-3xl font-extrabold mr-1'>৳</span>{course_price}
                        </span>
                        <Link to={`/course/${course_id}`}
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-blue-800">
                            View Details
                        </Link>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default CourseViewCard;