import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

const Login = () => {
    return (
        <div className="flex justify-center mx-3 md:py-44 py-2">
            <div className="container md:w-1/3">
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            placeholder="name@gmail.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            placeholder="Enter Password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">
                            Remember me
                        </Label>
                    </div>
                    <Button type="submit">
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;