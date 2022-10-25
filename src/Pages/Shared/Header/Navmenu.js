import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navmenu = () => {
    return (
        <div className="container mx-auto">
            <Navbar fluid={true} rounded={true}>
                <NavLink to="/">
                    <Navbar.Brand>
                        <img
                            src="https://i.ibb.co/hC8wR6Z/Nice-Png-education-icon-png-5042883.png"
                            className="mr-1 h-10 sm:h-9 mt-1"
                            alt="nLearning"
                        />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            nLearning
                        </span>
                    </Navbar.Brand>
                </NavLink>
                <div className="flex md:order-2 mt-1 md:mt-0 items-center">
                    <div className='mr-2 flex'>
                        <Flowbite >
                            <DarkThemeToggle className='border' />
                        </Flowbite>
                    </div>
                    <div className='hidden md:flex'>
                        <Button.Group>
                            <NavLink to="/login" className={({ isActive }) => isActive ? 'text-white font-bold bg-cyan-600 rounded-lg mr-1' : 'hover:text-cyan-800 mr-1'}>
                                <Button className='border' color="blue">
                                    <span className='dark:text-white'>Login</span>
                                </Button>
                            </NavLink>
                            <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-white font-bold bg-cyan-600 rounded-lg mr-2' : 'hover:text-cyan-800 mr-2'}>
                                <Button className='border' color="blue">
                                    <span className='dark:text-white'>Signup</span>
                                </Button>
                            </NavLink>
                        </Button.Group>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className='mr-2 hidden'>
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
                            <Navbar.Toggle className='border' />
                        </div>
                    </div>
                </div>
                <div className='flex md:hidden mx-auto mt-3'>
                    <Button.Group>
                        <NavLink to="/login" className={({ isActive }) => isActive ? 'text-white font-bold bg-cyan-600 rounded-lg mr-1' : 'hover:text-cyan-800 mr-1'}>
                            <Button className='border' color="blue">
                                <span className='dark:text-white'>Login</span>
                            </Button>
                        </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => isActive ? 'text-white font-bold bg-cyan-600 rounded-lg mr-2' : 'hover:text-cyan-800 mr-2'}>
                            <Button className='border' color="blue">
                                <span className='dark:text-white'>Signup</span>

                            </Button>
                        </NavLink>
                    </Button.Group>
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