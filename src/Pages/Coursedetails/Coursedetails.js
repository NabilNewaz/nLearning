import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    const CourseDetails = useLoaderData();
    return (
        <div>
            <p>this is course details about {CourseDetails.course_name}</p>
        </div>
    );
};

export default Coursedetails;