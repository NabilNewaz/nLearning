import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Footer } from 'flowbite-react';
import React from 'react';

const FooterContent = () => {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className='container mx-auto md:px-5'>
            <Footer container={true}>
                <div className="w-full">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href="https://flowbite.com"
                                src="https://i.ibb.co/hC8wR6Z/Nice-Png-education-icon-png-5042883.png"
                                alt="nLearning"
                                name="nLearning"
                            />
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
                                        Privacy Policy
                                    </Footer.Link>
                                    <Footer.Link href="#">
                                        Terms & Conditions
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