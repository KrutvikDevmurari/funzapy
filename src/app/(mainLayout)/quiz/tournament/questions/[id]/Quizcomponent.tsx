"use client"
import React, { useEffect, useState } from 'react';

const QuizComponent: React.FC = () => {
    const [timer, setTimer] = useState(90); // Initial timer value set to 90 seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Decrease timer by 1 second
            setTimer((prevTimer) => Math.max(prevTimer - 1, 0)); // Ensure timer never goes below 0
        }, 1000); // Run every second

        // Cleanup function to clear interval when component unmounts
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once after initial render

    // Calculate scale for the yellow circle based on timer
    const yellowCircleScale = timer / 90;

    return (
        <div>
            <div className="flex -mt-10 justify-center w-full">
                <div className="absolute z-10 -mt-5 w-14 h-14 justify-center align-middle bg-white rounded-full">
                    <svg className="progress-ring absolute rounded-full " width="56" height="56">
                        <circle className="progress-ring__circle" stroke="#6366F1" strokeWidth="4" fill="transparent" r="20" cx="28" cy="28" style={{ strokeDasharray: "125.664, 125.664", strokeDashoffset: (90 - timer) * 1.396 }}></circle>
                    </svg>
                    <svg className="progress-ring absolute rounded-full" width="56" height="56">
                        <circle className="progress-ring__circle" stroke="orange" strokeWidth="4" fill="transparent" r="24" cx="28" cy="28"></circle>
                    </svg>
                </div>
                <div className="title text-center rounded-full absolute text-indigo-500 font-bold text-lg z-10" id="qt">
                    {timer}
                </div>


                <div className="w-full justify-center items-center bg-white dark:bg-slate-900 drop-shadow-lg shadow rounded m-3 pt-12">
                    <div id="question" className="text-center p-2" style={{}}>Which of these players STARTED in the 2003 Division Three Play off final for Bournemouth?</div>
                    <div className="flex justify-center"><span className="text-center p-1 text-gray-50 text-xs bg-indigo-500 rounded-t-md" id="qno">Question 1 / 25</span></div>
                </div>

            </div>
            {/* Answers */}
            <div className="answers mt-2 grid grid-cols-2 gap-5 p-5 text-sm font-bold text-gray-500">
                <div id="A" className="answer flex align-middle bg-gray-50 p-2 rounded-md shadow-primary-500 outline outline-1 cursor-pointer outline-indigo-300">
                    <div className="selanswer self-center w-full text-center" id="o1">Trevor Hartley</div>
                </div>
                <div id="B" className="answer flex p-2 rounded-md bg-gray-50 shadow-primary-500 outline outline-1 cursor-pointer outline-indigo-300">
                    <div className="selanswer self-center w-full text-center" id="o2">John Bond</div>
                </div>
                <div id="c" className="answer flex p-2 rounded-md bg-gray-50 shadow-primary-500 outline outline-1 cursor-pointer outline-indigo-300">
                    <div className="selanswer self-center w-full text-center" id="o3">Don Welsh</div>
                </div>
                <div id="d" className="answer flex p-2 rounded-md bg-gray-50 shadow-primary-500 outline outline-1 outline-indigo-300 cursor-pointer">
                    <div className="selanswer self-center w-full text-center" id="o4">Reg Flewin</div>
                </div>
            </div>

            {/* Your Score */}
            <div className="flex justify-center">
                <div className="border p-1 bg-white rounded-sm font-semibold shadow-sm">
                    <span className="flex text-center items-center bg-indigo-500 text-sm h-8 text-gray-50 rounded-sm">
                        <span className="bg-white h-6 w-1 z-1 absolute items-center rounded-r-sm "></span>
                        <span id="ys" className="px-10">Your score : 0</span>
                        <span className="bg-white h-6 w-1 z-1 items-center rounded-l-sm"></span>
                    </span>
                </div>
            </div>

            {/* Correct and Wrong Counts */}
            <div className="grid grid-cols-2 mt-2">
                <div className="flex ml-5">
                    <span className="h-6 w-1 bg-green-600 rounded-md drop-shadow-sm shadow"></span>
                    <h5 id="ca" className="ml-3 font-semibold">Correct : 0</h5>
                </div>
                <div className="flex ml-5">
                    <span className="h-6 w-1 bg-red-600 rounded-md drop-shadow-sm shadow"></span>
                    <h5 id="wa" className="ml-3 font-semibold">Wrong : 0</h5>
                </div>
            </div>
        </div >
    );
};

export default QuizComponent;
