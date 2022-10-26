import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterContent = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className='container mx-auto md:px-5'>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div className='lg:w-2/6 md:w-1/3 mb-5 md:mb-0'>
                            <Link to="/">
                                <Footer.Brand
                                    href="/"
                                    src="https://i.postimg.cc/Qds28Bpy/n-Learning.png"
                                    alt="nLearning"
                                    name="nLearning"
                                />
                            </Link>
                            <p className='mt-3 dark:text-white md:text-justify'>
                                This is a eLearning WebApp. We provide a quality learning platform in the domains of Computer Science / Information Technology / Programming Languages / Web technology.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Flowbite
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Tailwind CSS
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        Github
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Discord
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col={true}>
                                    <Footer.Link href="#">
                                        <Link to='/terms'>Privacy Policy</Link>
                                    </Footer.Link>
                                    <Footer.Link>
                                        <Link to='/terms'>Terms & Conditions</Link>
                                    </Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright
                            href="#"
                            by="nLearning™"
                            year={new Date().getFullYear()}
                        />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <button onClick={() => openInNewTab('https://facebook.com')}><FontAwesomeIcon className='text-xl text-gray-500 dark:hover:text-white' icon={faFacebook} /></button>
                            <button onClick={() => openInNewTab('https://www.instagram.com')}><FontAwesomeIcon className='text-xl text-gray-500 dark:hover:text-white' icon={faInstagram} /></button>
                            <button onClick={() => openInNewTab('https://twitter.com')}><FontAwesomeIcon className='text-xl text-gray-500 dark:hover:text-white' icon={faTwitter} /></button>
                            <button onClick={() => openInNewTab('https://github.com')}><FontAwesomeIcon className='text-xl text-gray-500 dark:hover:text-white' icon={faGithub} /></button>
                            <button onClick={() => openInNewTab('https://www.twitch.tv')}><FontAwesomeIcon className='text-xl text-gray-500 dark:hover:text-white' icon={faTwitch} /></button>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
};

export default FooterContent;