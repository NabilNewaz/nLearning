import { Badge, Button, Card, Label, Textarea, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider/Authprovider';

const Profile = () => {
    const { user, verifyMail, updateUserProfile, errorMsgToast, setLoading } = useContext(AuthContext);
    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullname.value;
        const photoUrl = form.photourl.value;
        const profile = {
            displayName: `${fullName ? fullName : user?.displayName}`,
            photoURL: `${photoUrl ? photoUrl : user?.photoURL}`
        }
        if (fullName === "" & photoUrl === "") {
            toast.error('Input Field Are Empty')
        }
        else {
            updateUserProfile(profile)
                .then(() => {
                    toast.success('Profile Updated')
                    setLoading(false);
                })
                .catch(error => errorMsgToast(error));
        }
    }

    const handleVerifyMail = () => {
        verifyMail()
            .then(() => {
                toast.success('Verification Mail Send');
            })
            .catch(error => {
                const onlyErrMsg = error.message.slice(22, error.message.length - 2);
                const processErrMsg = onlyErrMsg.split('-');
                for (let i = 0; i < processErrMsg.length; i++) {
                    processErrMsg[i] = processErrMsg[i].charAt(0).toUpperCase() + processErrMsg[i].slice(1);

                }
                const finalMsg = processErrMsg.join(" ");
                toast.error(finalMsg);
            });
    }

    return (
        <div className='container mx-auto px-2 md:px-5 md:mt-5 mb-5'>
            <div className='md:flex gap-3'>
                <div className="max-w-lg">
                    <Card>
                        <div className="flex flex-col items-center p-8">
                            <img
                                className="mb-3 h-24 w-24 rounded-full shadow-lg"
                                src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'}
                                alt={user?.displayName ? user.displayName : 'Unnamed User'} />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {user?.displayName ? user.displayName : 'Unnamed User'}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {user?.email}
                            </span>
                            <span className='mt-2'>
                                <Badge color={user?.emailVerified ? "success" : "failure"}>
                                    {user?.emailVerified ? "Verified User" : "Mail Not Verified"}
                                </Badge>
                            </span>
                            <div className={user?.emailVerified ? "hidden" : "block"}>
                                <div className="mt-4 flex space-x-3 lg:mt-6">
                                    <Link onClick={handleVerifyMail}
                                        href="#"
                                        className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                                        Verify Email Address
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col w-full bg-white border rounded-lg md:w-4/5 border-gray-150 mt-3 md:mt-0 dark:border-gray-700 dark:bg-gray-800">
                    <div className="flex flex-wrap items-center justify-between border-b border-gray-200 dark:border-gray-600 sm:flex-no-wrap">
                        <div className="relative p-6">
                            <h3 className="flex text-lg font-medium leading-6 text-gray-600 dark:text-gray-300">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                {user?.displayName ? user.displayName : 'Unnamed User'}'s Profile Settings
                            </h3>
                        </div>
                    </div>
                    <div className="uk-card-body">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="relative flex flex-col px-10 py-8 lg:flex-row">
                                <div className="flex justify-start w-full mb-8 lg:w-3/12 xl:w-1/5 lg:m-b0">
                                    <div className="relative w-32 h-32 cursor-pointer group">
                                        <div className={image ? 'hidden' : 'block'}>
                                            <img id="preview" src={user?.photoURL ? user?.photoURL : 'https://i.ibb.co/X2xMzwL/defultuser.png'} alt='profilepic' className="w-32 h-32 rounded-full " />
                                        </div>
                                        <div className={image ? 'block' : 'hidden'}>
                                            <img id="preview" src={image} alt='profilepic' className="w-32 h-32 rounded-full " />
                                        </div>
                                        <div className="absolute inset-0 w-full h-full">
                                            <input type="file" onChange={onImageChange} id="upload" className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer group" />
                                            <input type="hidden" id="uploadBase64" name="avatar" />
                                            <button className="absolute bottom-0 z-10 flex items-center justify-center w-10 h-10 mb-2 -ml-5 bg-black bg-opacity-75 rounded-full opacity-75 group-hover:opacity-100 left-1/2">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-9/12 xl:w-4/5">
                                    <div>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="fullname1"
                                                value="Full Name"
                                            />
                                        </div>
                                        <TextInput
                                            id="fullname1"
                                            name='fullname'
                                            type="text"
                                            placeholder="Enter Full Name"
                                            required={false}
                                            shadow={true}
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="email2"
                                                value="Your email"
                                            />
                                        </div>
                                        <TextInput
                                            id="email2"
                                            type="email"
                                            placeholder={user?.email}
                                            value={user?.email}
                                            disabled
                                            required={false}
                                            shadow={true}
                                        />
                                    </div>
                                    <div className='mt-3'>
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="photourl1"
                                                value="Profile Photo (Optional)"
                                            />
                                        </div>
                                        <TextInput
                                            id="photourl1"
                                            name='photourl'
                                            type="text"
                                            placeholder="Enter Your Profile Photo"
                                            required={false}
                                            shadow={true}
                                        />
                                    </div>
                                    <div className='mt-3' id="textarea">
                                        <div className="mb-2 block">
                                            <Label
                                                htmlFor="about"
                                                value="About (Optional)"
                                            />
                                        </div>
                                        <Textarea
                                            id="about"
                                            placeholder="About Your Self..."
                                            required={false}
                                            rows={4}
                                        />
                                    </div>

                                    <div className="flex justify-end w-full">
                                        <Button className='mt-5' type="submit">
                                            Update
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;