import React from 'react';
import Headerbanner from './Headerbanner';

const Home = () => {
    return (
        <div>
            <div className="container mx-auto">
                <Headerbanner></Headerbanner>
            </div>
            <p>this is home</p>
        </div>
    );
};

export default Home;