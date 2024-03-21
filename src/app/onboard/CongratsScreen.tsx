import Link from 'next/link';
import React from 'react';

const CongratsScreen = () => {
    return (
        <div className="h-screen" style={{ height: 'auto !important' }}>
            <div className="flex justify-center mt-5" id="qw">
                <img className="transform animate-fade-in-down" src="/images/congo.webp" alt="" />
            </div>
            <div className="justify-center text-slate-200 text-3xl text-center transform animate-fade-in-down -mt-12 tl">
                <div className="mt-10">
                    You have won <span className="text-yellow-300 animate-bounce">100</span> Coins.
                </div>
            </div>
            <div className="flex justify-center my-2 animate-fade-in-down mb-10">
                <Link className="py-2 px-3 shadow-md shadow-yellow-300 bg-gradient-to-b from-yellow-200 via-yellow-300 to-yellow-400 z-50 rounded-sm" href="#">Let's Start</Link>
            </div>
            <div className="flex justify-center text-gray-200">
                <Link href="#">Create Account</Link> -OR- <Link href="#">Login</Link>
            </div>
            <div className="mx-5 text-gray-200 border p-2 font-extralight">
                <div className="flex justify-center">
                    <h1 className="font-semibold text-yellow-300">Play Quiz and Win Coins!</h1>
                </div>
                <div className="divider div-transparent my-2"></div>
                <div className="flex">
                    <span className="flex">- Play quizzes available in more than 45+ categories like Entertainment, Cricket, Business & more!</span>
                </div>
                <div className="flex">
                    <span className="flex">- Play tournaments updated hourly and complete yourself.</span>
                </div>
                <div className="flex">
                    <span className="flex">- Get coins on the completion of each task.</span>
                </div>
                <div className="flex">
                    <span className="flex">- Millions of quiz enthusiasts like you showed trust on us.</span>
                </div>
            </div>
        </div>
    );
};

export default CongratsScreen;
