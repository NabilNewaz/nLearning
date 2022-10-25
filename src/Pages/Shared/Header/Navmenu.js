import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import DarkModeToggle from "react-dark-mode-toggle";
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    return (
        <div>
            <Navbar fluid={true} rounded={true}>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img
                            src="https://i.ibb.co/hC8wR6Z/Nice-Png-education-icon-png-5042883.png"
                            className="mr-1 h-6 sm:h-9 mt-1"
                            alt="nLearning"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                            nLearning
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2 items-center">
                    <div className='flex mr-2'>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={42}
                        />
                    </div>
                    <div className='mr-2'>
                        <Dropdown
                            arrowIcon={false}
                            inline={true}
                            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />} >
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    Bonnie Green
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    name@flowbite.com
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item>
                                Sign Out
                            </Dropdown.Item>
                        </Dropdown>
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : undefined} to="/home">
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : undefined} to="/courses" >
                            Courses
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : undefined} to="/faq" >
                            FAQ
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-blue-500 font-bold' : undefined} to="/blog" >
                            Blog
                        </NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navmenu;