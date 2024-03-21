import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AuthScreen = () => {
    return (
        <div className='min-h-screen bg-[url("/images/mainBackground.svg")] pt-5'>
            <div className="shadow-inner rounded-md shadow-blue-700 m-5 mt-0 text-white text-center p-5" id="qw">
                <div className="flex mb-2">
                    <div className="m-auto">
                        <div>
                            <img className="w-full h-52 shimmer" src="https://play102.funzapy.com/assets/images/logo5.png" width="50%" height="50%" alt="" />
                        </div>
                    </div>
                </div>

                <Link className="shimmerq" href="#">
                    <div className="bg-slate-100 inline p-4 rounded-md shadow-md text-blue-700 border-b-4 border-blue-700 drop-shadow-xl">
                        <Image className='inline' src={'/images/Facebook.svg'} alt='Facebook' width={"50"} height={"50"} />
                        Continue with Facebook
                    </div>
                </Link>

                <div className="text-center mt-2 mb-2">
                    OR
                </div>

                <Link className="" href="#">
                    <div className="bg-slate-100 inline p-4 rounded-md shadow-md text-blue-700 border-b-4 border-blue-700 drop-shadow-xl">
                        <Image className='inline' src={'/images/Google.svg'} alt='Facebook' width={"50"} height={"50"} />
                        Continue with Google
                    </div>
                </Link>

                <div className="clear-both mt-5 text-center text-white">
                    By Signing up, you agree to FunZapy :  <Link href="/privacy" target="_blank" className="text-amber-300">Privacy Policy</Link>
                </div>
            </div>
            <div className="mx-5 text-gray-200 border p-2 font-extralight">
                <div className="flex justify-center">
                    <h1 className="font-semibold text-yellow-300">Play Quiz and Win Coins!</h1>
                </div>
                <div className="divider div-transparent my-2"></div>
                <div className="flex">
                    <span className="flex">- Play quizzes available in more than 45+ categories like Entertainment, Cricket,
                        Business &amp;
                        more!</span>
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

export default AuthScreen;
