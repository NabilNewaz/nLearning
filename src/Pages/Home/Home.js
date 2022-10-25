import React from 'react';
import Courses from '../Shared/Courses/Courses';
import Headerbanner from './Headerbanner';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Headerbanner></Headerbanner>
            </div>
            <div>
                <Courses></Courses>
            </div>
        </div>
    );
};

export default Home;