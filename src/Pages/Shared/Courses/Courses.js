import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseViewCard from './CourseViewCard';

const Courses = () => {
    const CoursesTopic = useLoaderData();
    return (
        <div className="container mx-auto px-3 md:px-5 mt-2">
            <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4 w-full mb-5'>
                {CoursesTopic.map(course => <CourseViewCard adOnStyle={{ style: 'mb-0' }} key={course.course_id} course={course}></CourseViewCard>)}
            </div>
        </div>
    );
};

export default Courses;