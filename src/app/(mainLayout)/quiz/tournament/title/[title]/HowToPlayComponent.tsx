"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react';

const HowToPlayComponent = () => {
    const params: any = useParams()
    return (
        <>
            <div className="m-5 shadow-indigo-500 shadow-sm">
                <div className="flex justify-center">
                    <span className="bg-indigo-500 text-center rounded-b-md text-gray-50 px-2">
                        How to play
                    </span>
                </div>
                <div className="flex justify-center">
                    <ul className="text-sm list-disc font-bold text-shadow-sm">
                        <li>
                            You got 90 seconds.
                        </li>
                        <li>
                            Answer as many questions as you can.
                        </li>
                        <li>
                            Entry Fees :
                            <i className="fas fa-coins ml-1 mr-1 text-yellow-custom"></i> 10
                        </li>
                    </ul>
                </div>
            </div>
            <div className="justify-center">
                <div className="balancediv flex justify-center">
                    <div className="border p-1 bg-white rounded-sm font-semibold shadow-sm">
                        <span className="flex text-center items-center bg-indigo-500 text-sm h-8 text-gray-50 rounded-sm">
                            <span className="bg-white h-6 w-1 z-1 absolute items-center rounded-r-sm"></span>
                            <span className="px-10">Your Current Balance : 100 🪙</span>
                            <span className="bg-white h-6 w-1 z-1 items-center rounded-l-sm"></span>
                        </span>
                    </div>
                </div>
                <div className="textdiv m-5 text-sm">
                    <p className="text-center">Tap below to start Playing this tournament. 10 coins will be deduct from your wallet when you tap below.</p>
                </div>
                <div className="flex startbutton mt-3 text-center justify-center">
                    <Link href={`/quiz/tournament/questions/${decodeURIComponent(params.title)}`} className="button button--aylen p-3 text-gray-200 bg-green-800 hover:bg-gray-700 hover:text-white relative block focus:outline-none border-2 border-solid rounded-lg text-sm text-center font-semibold uppercase tracking-widest align-middle overflow-hidden" type="submit">Start tournament</Link>
                </div>
                <div className="m-5 shadow-indigo-500 shadow-md">
                    <div className="flex justify-center">
                        <span className="bg-indigo-500 text-center rounded-b-md text-gray-50 px-2">
                            Tournament Rules
                        </span>
                    </div>
                    <div className="flex justify-center px-7 py-2">
                        <ul className="text-sm list-decimal font-bold text-shadow-sm">
                            <li>You'll get 90 second to answer as many questions as you can [Max questions you can answer is 25]</li>
                            <li>There are 4 option for each questions, One of them is the answer for the questions</li>
                            <li>You'll get 20 points for each right answer</li>
                            <li>You'll get (-) 10 points for each wrong answer</li>
                            <li>You'll get 10 points as hattrick bonus if you answer 3 questions correctly in a row.</li>
                            <li>The winner for the quiz is decided depending upon the score of all the users that participated in the quiz</li>
                            <li>Winner for each quiz will be declared at a predefined time</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HowToPlayComponent;
