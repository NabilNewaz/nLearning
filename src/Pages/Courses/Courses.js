import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseViewCard from './CourseViewCard';

const Courses = () => {
    const CoursesTopic = useLoaderData();
    console.log(CoursesTopic)
    return (
        <div className="container mx-auto px-3 md:px-5 mt-2">
            <div className='grid grid-cols-4 gap-4 w-full'>
                {CoursesTopic.map(course => <CourseViewCard key={course.id} course={course}></CourseViewCard>)}
            </div>
        </div>
    );
};

export default Courses;