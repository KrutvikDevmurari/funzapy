'use client'

import React, { useEffect, useState } from 'react';
import Modal from './LoginModal';
import { useParams } from 'next/navigation'
import axios from 'axios';
import Spinner from '@/components/Loader';


const QuestionCard = ({ question, options, setIsOpen }: any) => {
    return (
        <div className="grid grid-cols-2 rounded-lg bg-[#6366f1] m-5 p-2 relative shadow-lg">
            <div className="col-span-2">
                <span className="qs text-white">{question}</span>
            </div>
            {options.map((option: any, index: any) => (
                <div key={index} onClick={() => setIsOpen(true)} className="justify-center cursor-pointer bg-white text-black answernow rounded-md hover:bg-green-400 hover:text-white px-2 py-1 text-shadow m-2 shadow-inner shadow-slate-500 text-center border border-[#6366f1] ">
                    {option.text}
                </div>
            ))}
        </div>
    );
}

const MainComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [questionData, setQuestionData] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    useEffect(() => {
        (async () => {
            setIsLoading(true)
            const response: any = await axios.get(`/api/sports/questions/get?id=${params.id}`)
            setQuestionData(response?.data?.data[0]?.questions)
            setIsLoading(false)
        })();
    }, [])

    return (
        <div>
            {isLoading ? <Spinner /> : questionData.length > 0 ? questionData?.map((question: any, index: number) => (
                <QuestionCard key={index} question={question.question} setIsOpen={setIsOpen} options={question.options} />
            )) : <p>No Data Found</p>}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}

export default MainComponent;
