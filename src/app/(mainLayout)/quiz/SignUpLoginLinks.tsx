"use client "
import Link from 'next/link';
import React from 'react';


const SignUpLoginLinks = () => {
    return (
        <>
            <div className="flex justify-center text-gray-200">
                <Link href="/login">Create Account</Link> -OR- <Link href="/login">Login</Link>
            </div>
            <div className="mx-5 text-gray-200 border p-2 font-extralight">
                <div className="flex justify-center">
                    <h1 className="font-semibold text-yellow-300">Play Quiz and Games.</h1>
                </div>
                <div className="divider div-transparent my-2"></div>
                <div className="flex">
                    <span className="flex">- Explore over 45 categories of quizzes, including Entertainment, Cricket, Business, and more!</span>
                </div>
                <div className="flex">
                    <span className="flex">- Participate in hourly-updated tournaments and challenge yourself to win.</span>
                </div>
                <div className="flex">
                    <span className="flex">- Earn coins for each task you complete.</span>
                </div>
                <div className="flex">
                    <span className="flex">- Join millions of quiz enthusiasts who trust us as their go-to platform for quizzes.</span>
                </div>
            </div>
        </>

    );
};

export default SignUpLoginLinks;
