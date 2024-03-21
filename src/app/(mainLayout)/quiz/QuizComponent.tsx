import React from 'react';

const QuizComponent = () => {
    return (
        <div className="shadow-inner rounded-md shadow-blue-700 m-5 mt-0 text-white text-center p-5" id="qw">
            <div className="flex justify-center t1">
                Let's start with your brain
            </div>
            <div className="text-xs font-thin justify-center t2">
                Answer this 2 simple question and get 100 coins.
            </div>
            <div className="divider div-transparent my-2"></div>

            <div className="text-white">
                <span className="bg-primary-600 rounded-md px-2 qt">
                    Question 1/2
                </span>
            </div>

            <div className="text-white my-2">
                <span className="ml-2 text-2xl text-right q" style={{}}>
                    What is the name of Salman Khan in Hum Saath Saath Hai movie?
                </span>
                <input type="hidden" id="answer" name="answer" value="o2" />
            </div>
            <div className="grid grid-cols-2 font-bold gap-2">
                <div data-ans="o1" id="o1" style={{}} className="ans text-[#4f46e5] p-2 border-2 w-full rounded-md bg-slate-50 cursor-pointer ease-in-out duration-300">
                    1. Vivek
                </div>
                <div data-ans="o2" id="o2" style={{}} className="ans text-[#4f46e5]  p-2 border-2 w-full rounded-md bg-slate-50  cursor-pointer ease-in-out duration-300">
                    2. Prem
                </div>
                <div data-ans="o3" id="o3" style={{}} className="ans text-[#4f46e5] p-2 border-2 w-full rounded-md bg-slate-50 cursor-pointer ease-in-out duration-300">
                    3. Vinod
                </div>
                <div data-ans="o4" id="o4" style={{}} className="ans text-[#4f46e5] p-2 border-2 w-full rounded-md bg-slate-50 cursor-pointer ease-in-out duration-300">
                    4. Anand
                </div>
            </div>

            <div style={{}} className="flex bg-primary-900 mt-2 text-sm p-px font-thin rounded-sm ff text-center justify-center">
                #FunFacts <br />
                Story of family is always togetherness
            </div>
        </div>
    );
};

export default QuizComponent;
