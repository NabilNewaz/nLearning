import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
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
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            nLearning
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2 mt-1 md:mt-0 items-center">
                    <div className='flex mr-2'>
                        <DarkModeToggle
                            onChange={setIsDarkMode}
                            checked={isDarkMode}
                            size={42}
                        />
                    </div>
                    <div>
                        <div className='flex hidden'>
                            <Button.Group>
                                <Button color="gray">
                                    Login
                                </Button>
                                <Button color="gray">
                                    Signin
                                </Button>
                            </Button.Group>
                        </div>
                        <div className='flex'>
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
                    </div>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-cyan-600 font-bold' : 'hover:text-cyan-800'} to="/home">
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-cyan-600 font-bold' : 'hover:text-cyan-800'} to="/courses" >
                            Courses
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-cyan-600 font-bold' : 'hover:text-cyan-800'} to="/faq" >
                            FAQ
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink className={({ isActive }) => isActive ? 'text-cyan-600 font-bold' : 'hover:text-cyan-800'} to="/blog" >
                            Blog
                        </NavLink>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navmenu;